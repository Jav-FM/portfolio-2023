import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const MiddleNavbar = () => {
  const { t: translate } = useTranslation("common");
  const router = useRouter();

  const navbarLinksProps = {
    mx: 2,
    fontSize: "lg",
  };

  return (
    <Flex
      backgroundColor="middleNavbarBackground"
      minHeight={"60px"}
      alignItems="center"
    >
      <Link href="/">
        <Text {...navbarLinksProps}>{translate("Welcome")}</Text>
      </Link>
      <Link href="/about">
        <Text {...navbarLinksProps}>{translate("About me")}</Text>
      </Link>
      <Link href="/portfolio">
        <Text {...navbarLinksProps}>{translate("Portfolio")}</Text>
      </Link>
      <Link href="/stack">
        <Text {...navbarLinksProps}>Stack</Text>
      </Link>
    </Flex>
  );
};

export default MiddleNavbar;
