import {
  FormControl,
  Radio,
  FormErrorMessage,
  RadioGroup as CkRadioGroup,
} from "@chakra-ui/react";
import React from "react";

import { RadioGroupProps } from "./radioGroup.schema";

import { FormLabel, RadioGroupContainer } from "./radioGroup.styles";

const RadioGroup: React.FC<RadioGroupProps> = ({
  optionList = [],
  name,
  value,
  label,
  error,
  touched,
  formControlStyle,
  formLabelStyle,
  onChange,
}) => {
  const handleChooseValue = (value: any) => {
    onChange?.(value);
  };

  return (
    <FormControl isInvalid={error && touched} {...formControlStyle}>
      <FormLabel {...formLabelStyle}>{label}</FormLabel>
      <CkRadioGroup name={name} onChange={handleChooseValue} value={value}>
        <RadioGroupContainer>
          {optionList.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              marginRight="32px"
              _last={{
                marginRight: 0,
              }}>
              {option.label}
            </Radio>
          ))}
        </RadioGroupContainer>
      </CkRadioGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default RadioGroup;
