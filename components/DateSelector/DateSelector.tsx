import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import { AutoComplete, DatePicker, DatePickerProps, Row, Typography } from "antd";

import styles from "./DateSelector.module.scss";

interface Props {
}

const { Option } = AutoComplete;
const { Text } = Typography;

const sortOptions = [
  { value: "todayCases", text: "New Cases" },
  { value: "todayDeaths", text: "New Deaths" },
  { value: "cases", text: "Total Cases" },
  { value: "deaths", text: "Total Deaths" },
];

const DateSelector: FC<Props> = () => {
  const router = useRouter();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Row className={styles.dateSection}>
      <Row className={styles.dateBar}>
        <DatePicker onChange={onChange} />
      </Row>
    </Row>
  );
};

export default DateSelector;
