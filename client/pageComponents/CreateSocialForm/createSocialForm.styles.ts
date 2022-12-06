import {
  chakra,
  Flex as CkFlex,
  Center as CkCenter,
  Tag as CkTag,
  Button as CkButton,
} from "@chakra-ui/react";

export const CreateSocialFormContainer = chakra(CkFlex, {
  baseStyle: () => ({
    margin: "auto",
    marginY: "100px",
    maxWidth: "1280px",
    flexDirection: "column",
  }),
});

export const CreateSocialFormHeaderContainer = chakra(CkFlex, {
  baseStyle: () => ({
    width: "100%",
    marginBottom: "32px",

    flexDirection: {
      base: "column",
      md: "row",
    },
  }),
});

export const CreateSocialHeaderLeftSideContainer = chakra(CkFlex, {
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

export const CreateSocialHeaderLeftSideTimeContainer = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    flexDirection: {
      base: "column",
      md: "row",
    },
    marginY: "28px",
  }),
});

export const CreateSocialHeaderLeftSideTimeItem = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginRight: {
      base: 0,
      md: "auto",
    },

    _last: {
      marginRight: 0,
    },
  }),
});

export const CreateSocialHeaderLeftSideNumberInputContainer = chakra(CkFlex, {
  baseStyle: () => ({
    width: "100%",
    alignItems: "center",
    marginTop: "12px",
    flexDirection: {
      base: "column",
      md: "row",
    },
  }),
});

export const CreateSocialHeaderLeftSideNumberInputItem = chakra(CkFlex, {
  baseStyle: () => ({
    width: {
      base: "100%",
      md: "180px",
    },
    alignItems: "center",
    marginRight: {
      base: 0,
      md: "36px",
    },

    _last: {
      marginRight: 0,
    },
  }),
});

export const CreateSocialHeaderRightSideContainer = chakra(CkCenter, {
  baseStyle: () => ({
    flex: {
      base: 1,
      md: 0.6,
    },
    background: "rgba(242, 242, 242, 0.1)",
    borderRadius: "0px 64px",
    border: "1px dashed #F2F2F2",
    height: "445px",
    cursor: "pointer",
  }),
});

export const CreateSocialFormBodyContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    width: {
      base: "100%",
      md: "650px",
    },
  }),
});

export const CreateSocialFormSettingContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    width: {
      base: "100%",
      md: "650px",
    },
    background: "white",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    padding: "32px",
    marginTop: "32px",
  }),
});

export const CreateSocialFormTagsContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    marginTop: "24px",
  }),
});

export const CreateSocialFormTagChooseList = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginTop: "20px",
  }),
});

export const CreateSocialFormTagList = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginTop: "16px",
  }),
});

export const CreateSocialFormTagItem = chakra(CkTag, {
  baseStyle: () => ({
    color: "text.grey.700",
    marginRight: "8px",
    cursor: "pointer",
    fontWeight: 500,

    _last: {
      marginRight: 0,
    },
  }),
});

export const CreateSocialFormTagActiveItem = chakra(CkTag, {
  baseStyle: () => ({
    color: "text.purple",
    background: "background.primary.50",
    marginRight: "8px",
    fontWeight: 500,

    _last: {
      marginRight: 0,
    },
  }),
});

export const CreateSocialFormButton = chakra(CkButton, {
  baseStyle: () => ({
    width: "100%",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "text.purple",
    background: "background.yellow",
    marginTop: "32px",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",

    _hover: {
      color: "text.purple",
      background: "background.yellow",
    },
  }),
});
