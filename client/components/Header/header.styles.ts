import { chakra, Flex as CkFlex, Center as CkCenter } from "@chakra-ui/react";

export const HeaderContainer = chakra(CkFlex, {
  baseStyle: () => ({
    margin: "auto",
    maxWidth: "1280px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingY: "22px",
  }),
});

export const HeaderRightSideContainer = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginLeft: "auto",
  }),
});

export const HeaderRightSideItem = chakra(CkCenter, {
  baseStyle: () => ({
    marginRight: "48px",

    _last: {
      marginRight: 0,
    },
  }),
});
