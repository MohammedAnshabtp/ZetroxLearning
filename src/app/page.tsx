import React from "react";
import { Provider } from "@/components/ui/provider";
import { AppProps } from "next/app";
import { store } from "../store/store";
import { server } from "../../mock/server";

if (process.env.NODE_ENV === "development") {
  server.listen();
}
function HomePage({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default HomePage;
