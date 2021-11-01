import React from "react";
import {
    StyledSwitch,
    StyledSwitchLabel,
    StyledSwitchInput,
    StyledSlider,
} from "./ToggleSwitch.styled";

const ToggleSwitch = ({ handleThemeSwitch }) => {
    return (
        <StyledSwitch>
            <StyledSwitchLabel>
                <StyledSwitchInput onChange={handleThemeSwitch} type="checkbox" />
                <StyledSlider />
            </StyledSwitchLabel>
        </StyledSwitch>
    );
};

export default ToggleSwitch;
