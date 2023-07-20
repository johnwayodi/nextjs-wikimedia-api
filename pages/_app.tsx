import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ConfigProvider, theme } from 'antd';

import { Provider } from 'react-redux';
import { store } from '@/models';

const { darkAlgorithm } = theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm],
        token: {
          colorPrimary: '#9055a2',
        },
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ConfigProvider>
  );
}
