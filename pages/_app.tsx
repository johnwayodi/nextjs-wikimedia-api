import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";

import { Provider } from "react-redux";
import { store } from "@/models";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ConfigProvider>
  );
}
