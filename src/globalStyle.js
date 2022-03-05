import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .active-nav-link {
    color: #000;
    border-bottom: 4px solid #000;
  }
`

export default GlobalStyle
