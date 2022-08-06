// import { useState, useEffect } from "react";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "../../../themes";
// import GlobalStyle from "../globals";
// import Lua from "../assets/Lua.png";
// import Sol from "../assets/Sol.png";

// import { ButtonChange, Container } from "./styles";

// function Themes({ children }) {
//     const [theme, setTheme] = useState("dark");

//     const toggleTheme = () => {
//         if (theme === "light") {
//             localStorage.setItem("theme", "dark");
//             setTheme("dark");
//         } else {
//             localStorage.setItem("theme", "light");
//             setTheme("light");
//         }
//     };

//     useEffect(() => {
//         const localTheme = localStorage.getItem("theme");
//         localTheme && setTheme(localTheme);
//     }, []);
//     return (
//         <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
//             <>
//                 <GlobalStyle />
//                 <Container>
//                     <ButtonChange onClick={toggleTheme}>
//                         <img
//                             src={theme === "dark" ? Sol : Lua}
//                             alt="Mudar theme"
//                             className="icons"
//                         />
//                     </ButtonChange>

//                     {children}
//                 </Container>
//             </>
//         </ThemeProvider>
//     );
// }

// export default Themes;
import { DefaultTheme, CustomTheme } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import dark from './dark';
import light from './light';

const defaultTheme = {
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '20px',
  },
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
