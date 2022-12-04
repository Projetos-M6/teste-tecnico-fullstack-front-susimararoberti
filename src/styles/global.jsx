import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --brown:#3a1414;
        --brown-0:#612d2d;
        --brown-1:#7d3e37;
        --brown-2: #aa5b49;
        --brown-3: #e98661;
        --brown-4: #ffc180;
        --brown-5:#ffdcb7;
        --grey-0:#F8F9FA;
        --grey-1:#868E96;
        --grey-2:#343B41;
        --grey-3: #212529;
        --grey-4:#121214;
        --black:#000000;
        --white:#FFFFFF;
        --red: #c53030;
    }

    body{
        background-color: var(--grey-0) !important;
    }

    body, input, button, h1, h2, h3, h4, h5, h6, p, span, select, option{
        font-family: 'Montserrat', sans-serif
    }
`;
