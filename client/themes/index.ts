import { extendTheme } from "@chakra-ui/react";
import {
  DARK_BLUE_TEXT,
  GREY_100_TEXT,
  GREY_700_TEXT,
  PRIMARY_50_BACKGROUND,
  PURPLE_BACKGROUND,
  PURPLE_TEXT,
  YELLOW_BACKGROUND,
} from "./globalStyles";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background:
          "linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%) no-repeat",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      },
    },
  },
  colors: {
    background: {
      purple: PURPLE_BACKGROUND,
      yellow: YELLOW_BACKGROUND,
      primary: {
        50: PRIMARY_50_BACKGROUND,
      },
    },
    text: {
      grey: {
        100: GREY_100_TEXT,
        700: GREY_700_TEXT,
      },
      darkBlue: DARK_BLUE_TEXT,
      purple: PURPLE_TEXT,
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

export default theme;
