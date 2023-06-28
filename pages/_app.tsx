import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components";

import { Provider } from "react-redux";
import { store } from "@/models";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
