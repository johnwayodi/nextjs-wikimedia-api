import { FC } from "react";
import Link from "next/link";
import { Row, Typography } from "antd";
import DateSelector from "../DateSelector/DateSelector";

const { Title } = Typography;

const NavBar: FC = () => {
  return (
    <Row className="w-full bg-teal-950">
      <Row className="w-full max-w-screen-2xl mx-auto px-4">
        <Link href="/">
          <h2 className="text-white text-2xl font-bold pt-4">On This Day</h2>
        </Link>
        <DateSelector />
      </Row>
    </Row>
  );
};

export default NavBar;
