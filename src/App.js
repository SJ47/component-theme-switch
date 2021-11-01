import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import ToggleSwitch from "./components/toggle-switch/ToggleSwitch";
import imgNight from "./assets/images/night.png";
import imgSunny from "./assets/images/sunny.png";
import { StyledAppContainer } from './components/toggle-switch/ToggleSwitch.styled';

const darkTheme = {
  name: "darkTheme",
  sliderImage: imgNight,
  colors: {
    background: "#ccc",
    color: "wheat",
    pageBg: "slategrey",
  },
  translateX: "-6px",
}

const lightTheme = {
  name: "lightTheme",
  sliderImage: imgSunny,
  colors: {
    background: "#2196f3",
    color: "slategrey",
    pageBg: "wheat",
  },
  translateX: "24px",
}

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleThemeSwitch = () => {
    setTheme(
      theme === darkTheme
        ? lightTheme
        : darkTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <h1>{theme.name}</h1>
        <ToggleSwitch handleThemeSwitch={handleThemeSwitch} />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
