import styled from "styled-components";

// App container to show background chaning light / dark in demo
export const StyledAppContainer = styled.div`
    background: ${(props) => props.theme.colors.pageBg};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        padding: 1em;
    }
`;

// Container div around the slider and switch
export const StyledSwitch = styled.div`
  display: flex;
  /* width: 100%;
  height: 100%; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// The switch - the box around the slider and sets its size
export const StyledSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

// The slider area
export const StyledSlider = styled.span`
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => props.theme.colors.background};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;

    // Slider icon
    &:before {
        position: absolute;
        content: "";
        height: 40px;
        width: 40px;
        left: 0px;
        bottom: 4px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        box-shadow: 0 0px 15px #2020203d;
        // Set the icon based on theme setting
        background: white url(${(props) => props.theme.sliderImage});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;

        // Move the icon based on theme setting
        -webkit-transform: translateX(${(props) => props.theme.translateX});
        -ms-transform: translateX(${(props) => props.theme.translateX});
        transform: translateX(${(props) => props.theme.translateX});
    }
`;

export const StyledSwitchInput = styled.input`
    /* Hide default HTML checkbox */
    opacity: 0;
    width: 0;
    height: 0;   
`;
