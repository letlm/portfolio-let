import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
