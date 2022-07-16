import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../store/provider";
import { createStore } from "../store/store";

const store = createStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
