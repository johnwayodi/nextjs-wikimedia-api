import { FC } from "react";
import Link from "next/link";
import { Row, Typography } from "antd";
import DateSelector from "../DateSelector/DateSelector";
import { GithubOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const NavBar: FC = () => {
  return (
    <div className="w-full bg-[#386641] h-16">
      <div className="h-full w-full max-w-screen-2xl mx-auto px-4 flex flex-row items-center divide-x">
        <Link href="/" className="pt-2 pr-2">
          <Title level={4}>On This Day</Title>
        </Link>
        <div className="grow">
          <DateSelector />
        </div>
        <div className="flex items-center">
          <Link
            href="https://github.com/johnwayodi/nextjs-rematch-tailwind"
            target="blank"
            className="cursor-pointer flex flex-row pl-2"
          >
            <Text className="hidden sm:block pr-2">View Project</Text>
            <GithubOutlined rev={undefined} className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
