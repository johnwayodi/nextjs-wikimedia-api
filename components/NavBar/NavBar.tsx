import { FC } from 'react';
import Link from 'next/link';
import { Typography, Affix } from 'antd';
import DateSelector from '../DateSelector/DateSelector';
import { GithubOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const NavBar: FC = () => {
  return (
    <Affix offsetTop={0}>
      <div className=" h-16 w-full bg-gradient-to-br from-emerald-500 to-purple-300 shadow-md">
        <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-row items-center divide-x px-4">
          <Link href="/" className="pr-2 pt-2">
            <Title level={4}>On This Day</Title>
          </Link>
          <div className="grow">
            <DateSelector />
          </div>
          <div className="flex items-center">
            <Link
              href="https://github.com/johnwayodi/nextjs-rematch-tailwind"
              target="blank"
              className="flex cursor-pointer flex-row pl-2"
            >
              <Text className="hidden pr-2 sm:block">Project</Text>
              <GithubOutlined rev={undefined} className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </Affix>
  );
};

export default NavBar;
