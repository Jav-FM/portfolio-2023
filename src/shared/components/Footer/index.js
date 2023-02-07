import { Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t: translate } = useTranslation("common");

  return (
    <Flex
      backgroundColor="primary"
      position="relative"
      bottom={0}
      left={0}
      width="100%"
      height={100}
    ></Flex>
  );
};

export default Footer;
