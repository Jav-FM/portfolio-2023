import { Flex, Text, Switch, Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const TopNavbar = ({ toggleMode, isDark }) => {
  const { t: translate } = useTranslation("common");
  const router = useRouter();

  console.log(router);

  return (
    <Flex
      backgroundColor="primary"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      minHeight={"60px"}
    >
      <Link href="/">
        <Heading size="lg" color="secondary" marginX={2}>
          {translate("Jav's Portfolio")}
        </Heading>
      </Link>
      <Flex gap={2} marginX={2}>
        <Link href={router.pathname} locale="es">
          <Text
            color="secondary"
            fontWeight={router.locale === "en" ? 200 : 600}
          >
            Español
          </Text>
        </Link>
        <Link href={router.pathname} locale="en">
          <Text
            color="secondary"
            fontWeight={router.locale === "en" ? 600 : 200}
          >
            English
          </Text>
        </Link>
        <Text color="secondary"> | {translate("Dark mode")}:</Text>
        <Switch
          isChecked={isDark}
          onChange={toggleMode}
          colorScheme="whiteAlpha"
          marginTop="2px"
        />
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
