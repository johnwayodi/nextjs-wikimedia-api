import { FC } from "react";
import { Row, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

interface Props { }

const Footer: FC<Props> = (props) => {
  return (
    <Row className="w-full bg-blue-900 h-16">
      <Link href="/" className="mx-auto mt-4">
        <p className="text-white">View on GitHub</p>
      </Link>
    </Row>
  );
};

export default Footer;
