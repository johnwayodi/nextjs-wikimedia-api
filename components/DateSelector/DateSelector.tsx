import { connect } from "react-redux";
import dayjs from 'dayjs';
import React, { useState, useEffect } from "react";
import { DatePicker, DatePickerProps, Row } from "antd";
import { Dispatch, RootState } from "@/models";

const mapState = (state: RootState) => ({
  featured: state.global.featured,
});

const mapDispatch = (dispatch: Dispatch) => ({
  getFeaturedSelected: (date: string) => dispatch.global.getFeaturedSelected({ date }),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const dateFormat = "DD MMM YYYY";

function DateSelector(props: Props) {
  const [currTime, setcurrTime] = useState(dayjs());


  const onChange: DatePickerProps['onChange'] = (date) => {
    setcurrTime(dayjs(date))
  };

  useEffect(() => {
    const currDate = currTime.format('MM/DD')
    props.getFeaturedSelected(currDate)
  }, []);

  useEffect(() => {
    const currDate = currTime.format('MM/DD')
    props.getFeaturedSelected(currDate)
  }, [currTime]);

  return (
    <Row className="w-48 py-4 pl-4">
      <DatePicker defaultValue={currTime} onChange={onChange} format={dateFormat} />
    </Row>
  );
};

export default connect(mapState, mapDispatch)(DateSelector);
