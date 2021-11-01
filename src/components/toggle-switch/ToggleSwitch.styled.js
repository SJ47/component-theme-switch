import styled from "styled-components";

export const StyledSwitch = styled.div`
    display: grid;
    grid-template-areas:
        "theme switch";
`;

export const StyledThemeText = styled.div`
    grid-area: theme;
    align-self: end;
    justify-self: end;
    font-size: 1rem;
`;

/* The switch - the box around the slider */
export const StyledSwitchLabel = styled.label`
    grid-area: switch;
    position: relative;
    height: 25px;
    margin-left: -1em;
    margin-right: .5em;
`;

export const StyledSwitchInput = styled.input`
    /* Hide default HTML checkbox */
    opacity: 0;
    width: 0;
    height: 0;
`;

export const StyledSlider = styled.span`
    /* The slider */
        position: absolute;
        cursor: pointer;
        top: 2px;
        left: 50px;
        right: 90px;
        bottom: -2px;
        background: ${(props) => props.theme.colors.background};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border: none;
        border-radius: 34px;

    // Slider ball
    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background: ${(props) => props.theme.colors.color};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        -webkit-transform: translateX(${(props) => props.theme.translateX});
        -ms-transform: translateX(${(props) => props.theme.translateX});
        transform: translateX(${(props) => props.theme.translateX});
        border-radius: 50%;
    }
`;
