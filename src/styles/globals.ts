import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Poppins', sans-serif;

        ::-webkit-scrollbar {
            width: 8px;
            height: 10px;
        }
        ::-webkit-scrollbar-thumb{
            background: ${(props) => props.theme.colors.detailsSix};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.colors.backgroundOne};
        }
    }

    body {
        background: ${(props) => props.theme.colors.backgroundOne};
        font: 400 1rem 'Poppins', sans-serif;
 
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a{ 
        color: ${(props) => props.theme.colors.textOne};
        text-decoration: none;
    }

    .container {
        width: 100%;
        margin: 0 auto;
        max-width: 85rem;
        min-width: 300px;
        padding: 0 1 rem;

        @media (max-width: 1450px) {
            max-width: 70rem;
        }

        @media (max-width: 1000px) {
            max-width: 50rem;
        }

        @media (max-width: 700px) {
            max-width: 100%;
        } 
    }

    .mode-view{
        margin-top: 5px;
        background-color: transparent;
        border: none;
        position: fixed;
        right: 0;
        z-index: 2000;
        width: 50px;
    }
`;
