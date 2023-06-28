import React, { useState } from 'react';
import { Affix } from 'antd';
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  const [top, setTop] = useState(0);

  return (
    <>
      <Affix offsetTop={top}>
        <Navbar />
      </Affix>
      <main>{children}</main>
      <Footer />
    </>
  );
}
