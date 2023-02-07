import { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const PortfolioPage = () => {
  const { t: translate } = useTranslation("common");

  return (
    <Fragment>
      <Head>
        <title>{translate("Portfolio")}</title>
        <meta name="description" content="Here you will see my projects" />
      </Head>
      <Flex>
        <Text>{translate("Portfolio")}</Text>
      </Flex>
    </Fragment>
  );
};

export default PortfolioPage;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
