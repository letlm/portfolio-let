import GlobalStyles from '../styles/globals';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { combineTheme, dark, light } from '../styles/themes';
import Lua from '../assets/Lua.png';
import Sol from '../assets/Sol.png';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? combineTheme(light) : combineTheme(dark));
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme} className="mode-view">
        <Image src={theme.title === 'light' ? Lua : Sol} />
      </button>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
