import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { StyledCheckbox, StyledMainSection } from "./Checkbox.styled";

interface CheckboxType {
  label: string;
  checked: boolean;
  disabled: true | false;
  size: "medium" | "small";
  customColor: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
}

function CheckboxComponent({label, checked, size, disabled, customColor, onChange }: CheckboxType) {
  return (
    <StyledMainSection>
    <StyledCheckbox 
        customColor={customColor}
        size={size}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </StyledMainSection>
  );
}

CheckboxComponent.defaultProps = {
  label: "",
  value: "",
  checked: "",
  disabled: false,
  size: "medium",
  customColor: 'blue',
  onChange:(e: MouseEvent) => {}
};

export default CheckboxComponent;
