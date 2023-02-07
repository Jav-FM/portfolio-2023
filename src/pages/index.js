import { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Home = () => {
  const { t: translate } = useTranslation("common");

  return (
    <Fragment>
      <Head>
        <title>{translate("Jav's Portfolio")}</title>
        <meta
          name="description"
          content="Welcome! Here I will share information with you about my experience as a Software Developer and about myself :)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Text>{translate("Jav's Portfolio")}</Text>
      </Flex>
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
