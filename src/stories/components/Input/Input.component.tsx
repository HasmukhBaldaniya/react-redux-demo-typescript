import React from "react";
import { StyledInput } from "./Input.styled";

interface InputComponentType {
  label: string;
  variant: "filled" | "standard" | "outlined";
  onChange: (param: string) => void;
  // onChange: (param: string) => void;
  disabled: boolean;
  defaultValue: string;
};

const InputComponent = ({ defaultValue, label, variant, disabled, onChange }: InputComponentType) => {
  return (
    <div>
      <StyledInput
        id="outlined-basic"
        label={label}
        onChange={(e) => onChange(e.target.value)}
        variant={variant}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </div>
  );
};

InputComponent.defaultProps = {
  variant: "outlined",
  label: "Name",
  onChange: (e: string) => {},
  disabled: false,
  defaultValue: ''
};

export default InputComponent;
