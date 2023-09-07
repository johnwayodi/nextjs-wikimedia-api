import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { DatePicker, DatePickerProps, Typography } from 'antd';
import { Dispatch, RootState } from '@/models';
import { DATE_FORMAT } from '@/utils';

const mapState = (state: RootState) => ({
  featured: state.global.featured,
  selectedDate: state.global.selectedDate,
});

const { Text } = Typography;

function DateSelector() {
  const dispatch = useDispatch<Dispatch>();
  const selectedDate = useSelector(
    (state: RootState) => state.global.selectedDate
  );

  const onChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      dispatch.global.setSelectedDate({ date });
    }
  };

  useEffect(() => {
    const currentDate = dayjs();
    dispatch.global.setSelectedDate({ date: currentDate });
  }, []);

  useEffect(() => {
    dispatch.global.getFeaturedSelected({ date: selectedDate });
  }, [selectedDate]);

  return (
    <div className="flex w-fit flex-row items-center px-4">
      <Text className="hidden pr-2 sm:block">Select Date:</Text>
      <DatePicker
        inputReadOnly
        value={selectedDate}
        onChange={onChange}
        format={DATE_FORMAT}
      />
    </div>
  );
}

export default DateSelector;
