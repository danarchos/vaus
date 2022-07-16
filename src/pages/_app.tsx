import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../store/provider";
import { createStore } from "../store/store";
import { SupabaseWrapper } from "../config/supabase";

const store = createStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <SupabaseWrapper>
        <Component {...pageProps} />
      </SupabaseWrapper>
    </StoreProvider>
  );
}

export default MyApp;
