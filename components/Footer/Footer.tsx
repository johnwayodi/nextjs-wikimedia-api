import { FC } from "react";
import { Row, Typography } from "antd";
import Link from "next/link";

interface Props { }

const { Text } = Typography

const Footer: FC<Props> = (props) => {
  return (
    <Row className="w-full bg-[#386641] h-16">
      <Link href="https://github.com/johnwayodi/nextjs-rematch-tailwind" target="blank" className="mx-auto mt-4">
        <Text>View on GitHub</Text>
      </Link>
    </Row>
  );
};

export default Footer;
