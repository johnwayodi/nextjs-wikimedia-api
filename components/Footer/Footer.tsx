import { FC } from "react";
import { Row, Typography } from "antd";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";

interface Props {}

const { Text } = Typography;

const Footer: FC<Props> = (props) => {
  return (
    <Row className="w-full bg-[#386641] h-16">
      <Link
        href="https://github.com/johnwayodi/nextjs-rematch-tailwind"
        target="blank"
        className="mx-auto flex flex-row items-center cursor-pointer"
      >
        <Text>View on GitHub</Text>
        <GithubOutlined rev={undefined} className="text-2xl text-white pl-2" />
      </Link>
    </Row>
  );
};

export default Footer;
