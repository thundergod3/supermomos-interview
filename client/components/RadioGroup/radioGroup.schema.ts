export interface OptionItem {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  optionList: OptionItem[];
  name?: string;
  value?: any;
  label?: string;
  error?: any;
  touched?: boolean;
  formControlStyle?: any;
  formLabelStyle?: any;
  onChange?: (value?: any) => void;
}
