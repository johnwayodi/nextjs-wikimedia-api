import { FC } from 'react';
import { Row, Typography } from 'antd';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';

interface Props {}

const { Text } = Typography;

const Footer: FC<Props> = (props) => {
  return (
    <Row className="h-16 w-full bg-gradient-to-br from-emerald-500 to-purple-300 shadow-md">
      <Link
        href="https://github.com/johnwayodi/nextjs-rematch-tailwind"
        target="blank"
        className="mx-auto flex cursor-pointer flex-row items-center"
      >
        <Text>View on GitHub</Text>
        <GithubOutlined rev={undefined} className="pl-2 text-2xl" />
      </Link>
    </Row>
  );
};

export default Footer;
