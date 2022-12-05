import {
  chakra,
  FormLabel as CkFormLabel,
  Flex as CkFlex,
} from "@chakra-ui/react";

export const FormLabel = chakra(CkFormLabel, {
  baseStyle: () => ({
    color: "text.third",
    fontSize: "14px",
    marginBottom: "4px",
    fontWeight: "bold",
  }),
});

export const RadioGroupContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexWrap: "wrap",
    alignItems: "center"
  }),
});
