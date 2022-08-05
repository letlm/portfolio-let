import type { NextPage } from "next";
import GlobalStyles from "../styles/globals";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { combineTheme, dark, light } from "../styles/themes";
import Switch from "react-switch";

const Home: NextPage = () => {
    const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

    const toggleTheme = () => {
        setTheme(
            theme.title === "light" ? combineTheme(dark) : combineTheme(light)
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Switch checked={theme.title === "dark"} onChange={toggleTheme} />
        </ThemeProvider>
    );
};

export default Home;
