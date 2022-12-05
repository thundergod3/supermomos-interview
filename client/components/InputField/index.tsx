/* eslint-disable react/no-children-prop */
import {
  Input,
  FormControl,
  Flex,
  Textarea,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { InputFieldProps } from "./inputField.schema";

import { FormLabel, InputIconContainer } from "./inputField.styles";

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "",
  label = "",
  onSubmit,
  usingEnterInput,
  formControlStyle = {},
  formLabelStyle = {},
  leftInputIcon,
  rightInputIcon,
  showingFocusBorder = true,
  isDisabled,
  error,
  touched,
  name,
  ...rest
}): ReactElement => {
  const handleOnKeyDown = (event: any) => {
    if (event?.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      onSubmit?.();
    }
  };

  return (
    <FormControl isInvalid={error && touched} {...formControlStyle}>
      {label && <FormLabel {...formLabelStyle}>{label}</FormLabel>}
      <Flex alignItems="center">
        {leftInputIcon && (
          <InputIconContainer>{leftInputIcon}</InputIconContainer>
        )}
        <InputGroup flexDirection="column">
          <Input
            name={name}
            type={type}
            placeholder={placeholder}
            onKeyDown={usingEnterInput ? (e) => handleOnKeyDown(e) : () => {}}
            focusBorderColor={!showingFocusBorder ? "transparent" : "blue.500"}
            disabled={isDisabled}
            background={error && touched ? "background.error" : "white"}
            {...rest}
          />

          <FormErrorMessage>{error}</FormErrorMessage>
        </InputGroup>
      </Flex>
    </FormControl>
  );
};

export default InputField;
