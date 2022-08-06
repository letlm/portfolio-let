import GlobalStyles from '../styles/globals';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { combineTheme, dark, light } from '../styles/themes';
import Switch from 'react-switch';
import Lua from '../assets/Lua.png';
import Sol from '../assets/Sol.png';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? combineTheme(light) : combineTheme(dark));
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch checked={theme.title === 'light'} onChange={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
