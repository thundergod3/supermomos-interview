import { chakra, Flex as CkFlex } from "@chakra-ui/react";

export const SocialPageContainer = chakra(CkFlex, {
  baseStyle: () => ({
    margin: {
      base: "0 24px",
      md: "auto",
    },
    marginY: "100px",
    maxWidth: "1280px",
    flexDirection: "column",
  }),
});

export const SocialPageHeaderContainer = chakra(CkFlex, {
  baseStyle: () => ({
    width: "100%",
    marginBottom: "32px",

    flexDirection: {
      base: "column",
      md: "row",
    },
  }),
});

export const SocialDetailHeaderLeftSideContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flex: {
      base: 1,
      md: 0.4,
    },
    flexDirection: "column",
    marginRight: "18px",
    marginTop: {
      base: "24px",
      md: "48px",
    },
    marginBottom: {
      base: "24px",
      md: 0,
    },
  }),
});

export const SocialDetailHeaderTimeContainer = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginTop: "35px",
  }),
});

export const SocialDetailHeaderTimeItem = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginRight: "35px",

    _last: {
      marginRight: 0,
    },
  }),
});

export const SocialDetailHeaderInfoContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
  }),
});

export const SocialDetailHeaderInfoItem = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginTop: "24px",
    marginRight: "35px",

    _last: {
      marginRight: 0,
    },
  }),
});

export const SocialDetailHeaderRightSideContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flex: {
      base: 1,
      md: 0.6,
    },
  }),
});
