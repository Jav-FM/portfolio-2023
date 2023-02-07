import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TopNavbar from "../TopNavbar";
import Footer from "../Footer";
import Header from "../Header";
import MiddleNavbar from "../MiddleNavbar";

const Layout = ({ children, toggleMode, isDark }) => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <TopNavbar toggleMode={toggleMode} isDark={isDark} />
      <Header />
      <MiddleNavbar />
      <Box minHeight="89.3vh">{children}</Box>
      <Footer toggleMode={toggleMode} isDark={isDark} />
    </Flex>
  );
};

export default Layout;
