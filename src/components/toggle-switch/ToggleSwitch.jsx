import React from "react";
import {
    StyledSwitch,
    // StyledThemeText,
    StyledSwitchLabel,
    StyledSwitchInput,
    StyledSlider,
} from "./ToggleSwitch.styled";

const ToggleSwitch = ({ handleThemeSwitch }) => {
    return (
        <StyledSwitch>
            {/* <StyledThemeText>THEME</StyledThemeText> */}
            <StyledSwitchLabel>
                <StyledSwitchInput onClick={handleThemeSwitch} type="checkbox" />
                <StyledSlider />
            </StyledSwitchLabel>
        </StyledSwitch>
    );
};

export default ToggleSwitch;
