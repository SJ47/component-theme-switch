import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import ToggleSwitch from "./components/toggle-switch/ToggleSwitch";

const darkTheme = {
  name: "darkTheme",
  colors: {
    background: "slategrey",
    color: "wheat",
  },
  translateX: "2px",
}

const lightTheme = {
  name: "lightTheme",
  colors: {
    background: "wheat",
    color: "slategrey",
  },
  translateX: "18px",
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
      <ToggleSwitch handleThemeSwitch={handleThemeSwitch} />
    </ThemeProvider>
  );
}

export default App;
