import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from 'antd';

import { Provider } from "react-redux";
import { store } from "@/models";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
