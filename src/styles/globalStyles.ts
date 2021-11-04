import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Below is an example to create a globally available css variable. This is called in the individual component 
    like this: background: var(--color-background); */
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Overpass:wght@100;200;300;400;600;700;800&display=swap');

    :root {
        --base-font-size: 16;
        --brand-blackish: #373737;
        --form-error: #fa5738;
        --font-overpass: 'Overpass', sans-serif;
        --font-tropical: 'tropical garden';
        --font-josefin: 'Josefin Sans', sans-serif
        --color-gray: #394151;
        --color-offWhite: #EFF6FF;
        --color-blue: #2d6bea;
        --color-med-blue: #547ccb;
        --color-light-gray: #c4c4c4;
        --color-radiant: radial-gradient(100% 256% at 100% 0%, rgba(176, 213, 255, 0.36) 0%, rgba(93, 162, 244, 0.82) 100%)
    }

    html {
        --fontSize-mobile: 2em;
        overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }
    
    body {
        background: var(--color-radiant);
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    .paragraph-xl,
    .paragraph1,
    .paragraph2,
    .section-description {
        font-weight: 400;
    }

    /* globally available classes. Use ex: className='section-description' */
    .nav-link {
        font-family: var(--font-overpass);
        font-size: calc((18 / var(--base-font-size) * 1rem));
        line-height: calc((22.32 / var(--base-font-size) * 1rem));
        color: var(--color-blue);
        cursor: pointer;
    }
    .nav-link::active {
        text-decoration: underline;
    }

    .section-josefin {
        font-family: var(---font-josefin);
        font-size: calc((25 / var(--base-font-size) * 1rem));
        line-height: calc((25 / var(--base-font-size) * 1rem));
        color: var(--brand-blackish);
        font-weight: 600;
        letter-spacing: -0.1em;
        text-shadow: 0px 1.5px 0px rgba(93, 162, 244, 0.82);
    }

    .section-josefin-small {
        font-family: var(---font-josefin);
        font-size: calc((15 / var(--base-font-size) * 1rem));
        font-weight: 300;
        line-height: calc((15 / var(--base-font-size) * 1rem));
        letter-spacing: -0.1em;
        margin-top: 0;
        padding-top: 0;
    }

    .section-overpass {
        font-family: var(---font-overpass);
        font-size: calc((25 / var(--base-font-size) * 1rem));
        line-height: calc((38 / var(--base-font-size) * 1rem));
        color: var(--brand-blackish);
        font-weight: 300;
        letter-spacing: -0.1em;
        text-shadow: 0px 1.5px 0px rgba(93, 162, 244, 0.82);
    }

    .sectionParagraph {
        font-family: var(--font-overpass);
        font-size: calc((16 / var(--base-font-size) * 1rem));
        line-height: calc(24 / var(--base-font-size) * 1rem);
        color: var(--color-light-gray);
        font-weight: 300;
    }

    .paragraph {
        font-family: var(--font-overpass);
        font-size: calc((20 / var(--base-font-size) * 1rem));
        line-height: calc(30 / var(--base-font-size) * 1rem);
        color: var(--color-gray);
        font-weight: 400;
    }

    .subtitle2 {
        font-family: var(--font-overpass);
        font-size: calc((20 / var(--base-font-size) * 1rem));
        line-height: calc(25 / var(--base-font-size) * 1rem);
        color: var(--color-gray);
        font-weight: 400;
        letter-spacing: -5%;
    }

    .subtitle1 {
        font-family: var(--font-overpass);
        font-size: calc((24 / var(--base-font-size) * 1rem));
        line-height: calc(30 / var(--base-font-size) * 1rem);
        font-weight: 400;
        color: var(--color-gray);
    }

    .header6 {
        font-family: var(--font-overpass);
        font-size: calc((14 / var(--base-font-size) * 1rem));
        line-height: calc(22.5 / var(--base-font-size) * 1rem);
        font-weight: 800;
        color: var(--color-gray);
    }

    .header5 {
        font-family: var(--font-overpass);
        font-style: light;
        font-size: calc((25 / var(--base-font-size) * 1rem));
        line-height: calc((38 / var(--base-font-size) * 1rem));
        font-weight: 300;
        color: var(--brand-blackish);
    }

    .header4 {
        font-family: var(--font-overpass);
        font-size: calc((24 / var(--base-font-size) * 1rem));
        line-height: calc(30 / var(--base-font-size) * 1rem);
        letter-spacing: 1px;
        font-weight: 800;
        color: var(--color-gray);
    }

    .header3 {
        font-family: var(--font-overpass);
        font-size: calc((32 / var(--base-font-size) * 1rem));
        line-height: calc(40 / var(--base-font-size) * 1rem);
        font-weight: 800;
        color: var(--color-gray);
    }

    .header2 {
        font-family: var(--font-overpass);
        font-size: calc((48 / var(--base-font-size) * 1rem));
        line-height: calc(60 / var(--base-font-size) * 1rem);
        font-weight: 400;
        color: white;
    }

    .header2-40 {
        font-family: var(--font-overpass);
        font-size: calc((40 / var(--base-font-size) * 1rem));
        line-height: calc(60 / var(--base-font-size) * 1rem);
        font-weight: 400;
        color: white;
        letter-spacing: -5%;
    }

    .header1 {
        font-family: var(--font-tropical);
        font-size: calc((60 / var(--base-font-size) * 1rem));
        line-height: calc(75.66 / var(--base-font-size) * 1rem);
        font-weight: 400;
        color: var(--color-gray);
        text-shadow: -30px 24px 64px 0px #547CCB;
    }

    .headerGreen {
        font-family: var(--font-overpass);
        font-size: calc((32 / var(--base-font-size) * 1rem));
        line-height: calc(39.68 / var(--base-font-size) * 1rem);
        font-weight: 700;
        color: #14d573;
    }

    .btn-primary {
        font-size: calc((18 / var(--base-font-size) * 1rem));
        line-height: calc(23 / var(--base-font-size) * 1rem);
        padding-block: calc((13.5 / var(--base-font-size) * 1rem));
        padding-inline: calc((27 / var(--base-font-size) * 1rem));
        background-color: 'green';
        min-width: calc(var(--btn-primary-min-width) / var(--base-font-size) * 1rem);
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 600;
        border-radius: 100px;
        cursor: pointer;
        appearance: none;
        color: white;
    }

    .white-text {
        color: white;
    }

    .gradient-border-blue-ltblue {
        border-width: 5px;
        border-style: solid;
        border-image: linear-gradient(326deg, rgba(221,236,254,1) 0%, rgba(108,170,247,1) 47%, rgba(33,72,184,1) 100%) 1;
    }

    .text-shadow {
        text-shadow: -30px 24px 64px #547CCB;
        color: white;
    }

    .text-shadow-light {
        text-shadow: -30px 24px 64px #547CCB;
    }

    .shadow {
        box-shadow: 3.6365px 8.23261px 42px rgba(82, 98, 104, 0.07),
    2.35699px 5.33595px 24.5972px rgba(82, 98, 104, 0.0531481),
    1.40072px 3.17108px 13.3778px rgba(82, 98, 104, 0.0425185),
    0.727299px 1.64652px 6.825px rgba(82, 98, 104, 0.035),
    0.296307px 0.670805px 3.42222px rgba(82, 98, 104, 0.0274815),
    0.0673425px 0.152456px 1.65278px rgba(82, 98, 104, 0.0168519);
    }

    @keyframes gradient {
        0% {
            background: radial-gradient(circle at center, var(--color-med-blue) 0%, #fff 0%, #fff 100%);
        }
        25% {
            background: radial-gradient(circle at center, var(--color-med-blue) 24%, #fff 25%, #fff 100%);
        }
        50% {
            background: radial-gradient(circle at center, var(--color-med-blue) 49%, #fff 50%, #fff 100%);
        }
        75% {
            background: radial-gradient(circle at center, var(--color-med-blue) 74%, #fff 75%, #fff 100%);
        }
        100% {
            color: #fff;
            background: radial-gradient(circle at center, var(--color-med-blue) 99%, #fff 100%, #fff 100%);
        }
    }
`;

export default GlobalStyle;
