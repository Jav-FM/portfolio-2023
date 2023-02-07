import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Work Sans",
  heading: "Work Sans",
  mono: "Work Sans",
};

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const components = {
  //   Button,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const main = { light: {}, dark: {} };

main.light = extendTheme({
  colors: {
    primary: "#1F1F1F",
    secondary: "#A78976",
    tertiary: "#f5f2f2",
    middleNavbarBackground: "#A78976",
  },
  fonts,
  fontWeights,
  config,
  styles: {
    global: {
      "html, body": {
        background: "#D9D9D9",
        color: "#141414",
      },
    },
  },
  components,
});

main.dark = extendTheme({
  colors: {
    primary: "#A78976",
    secondary: "#1F1F1F",
    tertiary: "#171616",
    middleNavbarBackground: "#918e8e",
  },
  fonts,
  fontWeights,
  config,
  styles: {
    global: {
      "html, body": {
        background: "#292828",
        color: "#D9D9D9",
      },
    },
  },
  components,
});

export const theme = { main };
