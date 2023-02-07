import { Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t: translate } = useTranslation("common");

  return <Flex backgroundColor="tertiary" width="100%" height={400}></Flex>;
};

export default Header;
