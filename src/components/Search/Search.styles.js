import { DebounceInput } from 'react-debounce-input'
import styled from 'styled-components'
import Select from 'react-select'

const SearchBar = styled(Select)`
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');
    margin-left: 16.5%;
    border: 1px solid #cccccc;
    -webkit-border-radius: 5px;
    outline: none;
    height: 35px;
    width: 325px;
    color: #000000ff;
    font-size: 22px;
    font-family: 'Titillium Web', sans-serif;
    margin-top: 15px;
    .search__menu {
        margin-top: 15px;
    }
`

export default SearchBar
