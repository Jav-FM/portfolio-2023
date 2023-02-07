import { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const StackPage = () => {
  const { t: translate } = useTranslation("common");

  return (
    <Fragment>
      <Head>
        <title>{translate("Stack")}</title>
        <meta name="description" content="Information about my tech stack." />
      </Head>
      <Flex>
        <Text>{translate("Stack")}</Text>
      </Flex>
    </Fragment>
  );
};

export default StackPage;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
