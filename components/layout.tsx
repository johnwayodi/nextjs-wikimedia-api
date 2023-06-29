import React, { useState } from 'react';
import { Affix } from 'antd';
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Provider } from 'react-redux';
import { store } from '@/models';


export default function Layout({ children }: any) {
  const [top, setTop] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <Affix offsetTop={top}>
          <Navbar />
        </Affix>
        <main>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
}
