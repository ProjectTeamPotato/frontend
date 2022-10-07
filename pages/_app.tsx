import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Provider } from "react-redux";
import configureStore from "../src/store";

const { store } = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
