import { connect } from 'react-redux';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { DatePicker, DatePickerProps, Typography } from 'antd';
import { Dispatch, RootState } from '@/models';
import { DATE_FORMAT } from '@/utils';

const mapState = (state: RootState) => ({
  featured: state.global.featured,
  selectedDate: state.global.selectedDate,
});

const { Text } = Typography;

const mapDispatch = (dispatch: Dispatch) => ({
  getFeaturedSelected: (date: dayjs.Dayjs) =>
    dispatch.global.getFeaturedSelected({ date }),
  updateDate: (date: dayjs.Dayjs) => dispatch.global.setSelectedDate({ date }),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

function DateSelector(props: Props) {
  const onChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      props.updateDate(date);
    }
  };

  useEffect(() => {
    const currDate = dayjs();
    props.updateDate(currDate);
  }, []);

  useEffect(() => {
    props.getFeaturedSelected(props.selectedDate);
  }, [props.selectedDate]);

  return (
    <div className="flex w-fit flex-row items-center px-4">
      <Text className="hidden pr-2 sm:block">Select Date:</Text>
      <DatePicker
        inputReadOnly
        value={props.selectedDate}
        onChange={onChange}
        format={DATE_FORMAT}
      />
    </div>
  );
}

export default connect(mapState, mapDispatch)(DateSelector);
