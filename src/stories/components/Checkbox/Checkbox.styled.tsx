import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

export const StyledMainSection = styled.div``;
type CheckboxTypes = {
  customColor: string;
};

export const StyledCheckbox = styled(Checkbox)<CheckboxTypes>`
    &.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary {
        color: ${({customColor}) => customColor ? customColor : "blue"};
    }
`;
