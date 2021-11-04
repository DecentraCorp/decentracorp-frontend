import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* Below is an example to create a globally available css variable. This is called in the individual component 
    like this: background: var(--color-background); */
    html {
        --color-green: green;
        --color-background: yellow;
        --color-blah: cyan;
        --fontSize-mobile: 2em;
        overflow-x: hidden;
    }
    * {
        font-family: Wavehaus;
    }

    a{
        text-decoration: none;
    }
    
    body {
        color: white;
        margin: 0;
        padding: 0;
        position: relative;
        /* background-color: linear-gradient(270deg, #212625 0%, #212625 25.49%, #242929 43.96%, #262E2D 69.51%, #293231 85.49%, #2C3635 100%); */
        background-color: #293231;
        width: 100vw;
        height: 100vh;
        /* margin-right: auto;
        margin-left: auto; */
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* Example of a globally available class. Will turn whatever is assigned className='RandomClass's background red */
    .RandomClass {
        color: red;
        background-color: red;
    }
`;

export default GlobalStyle;
