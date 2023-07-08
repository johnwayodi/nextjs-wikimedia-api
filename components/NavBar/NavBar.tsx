import { FC } from "react";
import Link from "next/link";
import { Row, Typography } from "antd";
import DateSelector from "../DateSelector/DateSelector";
import { GithubOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const NavBar: FC = () => {
  return (
    <div className="w-full bg-[#386641] h-16">
      <div className="h-full w-full max-w-screen-2xl mx-auto px-4 flex flex-row items-center">
        <Link href="/" className="grow sm:grow-0 pt-2">
          <Title level={4}>On This Day</Title>
        </Link>
        <DateSelector />
        <div className="flex items-center grow-0 sm:grow justify-end">
          <Link
            href="https://github.com/johnwayodi/nextjs-rematch-tailwind"
            target="blank"
            className="cursor-pointer flex flex-row"
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
