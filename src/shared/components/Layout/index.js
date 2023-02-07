import { Box, Flex, Text, Switch } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Layout = ({ children, toggleMode, isDark }) => {
  const router = useRouter();
  const { t: translate } = useTranslation("common");

  return (
    <Box>
      <Flex backgroundColor="primary">
        <Text color="secondary" margin={2}>
          {translate("Jav's Portfolio")}
        </Text>
        <Flex position="absolute" right="0" gap={2} margin={2}>
          <Link href="/" locale="es">
            <Text
              color="secondary"
              fontWeight={router.locale === "en" ? 200 : 600}
            >
              {router.locale === "en" ? "Spanish" : "Español"}
            </Text>
          </Link>
          <Link href="/" locale="en">
            <Text
              color="secondary"
              fontWeight={router.locale === "en" ? 600 : 200}
            >
              {router.locale === "en" ? "English" : "Inglés"}
            </Text>
          </Link>
          <Text color="secondary"> | {translate("Dark mode")}</Text>
          <Switch
            isChecked={isDark}
            onChange={toggleMode}
            colorScheme="whiteAlpha"
          />
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
