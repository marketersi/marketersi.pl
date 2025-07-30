import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  useScrollRestoration();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
