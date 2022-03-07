import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'
import { DropdownButton } from 'react-bootstrap'
import Dropdown from '../../../../components/Dropdown'

const CurrenciesWindow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebf6fb;
    border-radius: 10px;
    line-height: 1.5;
    width: 436px;
    flex-direction: column;
    margin-left: 15%;
    margin-top: 40px;
    padding: 10px;
`

const ExchangeContainer = styled.div`
    display: flex;
    margin: 15px;
    position: relative;
`

const ExchangesInput = styled(DebounceInput)`
    height: 40px;
    width: 345px;
    font-size: 18px;
    align-items: center;
    padding: 10px;
    color: #000;
    border: 1px solid #b4c6d2;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    :focus {
        outline: 0 !important;
        -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }
    :hover {
        outline: 0;
        border-color: #a3b8c2;
        -webkit-box-shadow: inset 0 1px 3px rgb(77 131 158 / 50%);
        box-shadow: inset 0 1px 3px rgb(77 131 158 / 50%);
    }
`

const CurrName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    background-color: transparent;
    color: #14509c;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    margin-right: 15px;
`

const CrossContainer = styled.div`
    position: absolute;
    right: -15px;
    top: 5px;
    cursor: pointer;
`

const DropdownContainer = styled.div`
    align-self: flex-end;
    margin-right: 12px;
    .dropdown-menu {
        max-height: 300px;
        overflow-y: scroll;
        .code {
            font-weight: 700;
            margin-right: 10px;
        }
    }
`

export {
    CurrenciesWindow,
    CurrName,
    ExchangeContainer,
    ExchangesInput,
    CrossContainer,
    DropdownContainer,
}
