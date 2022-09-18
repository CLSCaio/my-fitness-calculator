import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { GlobalStyle, Main } from "library-caiol.sousa";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Component {...pageProps} />
      </Main>

      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default MyApp;
