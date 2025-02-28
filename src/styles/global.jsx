import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap');
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body{
        height: 100%;
        width: 100%;
    }

    body{
        background-color: #121214;
    }
`;

export default GlobalStyle;