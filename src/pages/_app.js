import { useState } from "react";
import Head from "next/head";
import { ChakraProvider, Switch } from "@chakra-ui/react";
import Layout from "../shared/components/Layout";
import { theme } from "../styles/theme";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");
  const isDark = mode === "dark";
  return (
    <ChakraProvider theme={theme.main[mode]}>
      <Layout toggleMode={toggleMode} isDark={isDark}>
        <Head>
          <title>Jav's Portfolio</title>
          <meta
            name="description"
            content="Welcome! Here I will share information with you about my experience as a Software Developer and about myself :)"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
