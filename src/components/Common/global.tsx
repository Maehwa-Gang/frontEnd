import {css} from '@emotion/react'

const global = css`
    * {
        box-sizing: border-box;
        input:focus {outline: none;}
        list-style: none;
        padding: 0;
        margin: 0;
        font-family: 'Spoqa Han Sans Neo';
    }

    a { 
        text-decoration: none;
    }

`;

export default global