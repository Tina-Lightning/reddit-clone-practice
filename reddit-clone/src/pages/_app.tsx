import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "@/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //ensures we have access to Chakra throughout our whole application
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;