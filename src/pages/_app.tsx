import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { GlobalStyle, Main, Header } from "library-caiol.sousa";
import { routes } from "../modules";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header
        routes={routes}
        link={{ type: "next", variant: "doubleLine" }}
        title="My-Fitness-CalculatorCLS"
      />
      <Main>
        <Component {...pageProps} />
      </Main>

      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default MyApp;
