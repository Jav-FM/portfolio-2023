import { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const AboutPage = () => {
  const { t: translate } = useTranslation("common");

  return (
    <Fragment>
      <Head>
        <title>{translate("About me")}</title>
        <meta name="description" content="Some things about me." />
      </Head>
      <Flex>
        <Text>{translate("About me")}</Text>
      </Flex>
    </Fragment>
  );
};

export default AboutPage;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
