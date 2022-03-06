import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button,
    input[type=number] {
        -webkit-appearance: none;
        -moz-appearance: textfield;
        margin: 0;
    }

    .active-nav-link {
        color: #000;
        border-bottom: 4px solid #000;
    }
`

export default GlobalStyle
