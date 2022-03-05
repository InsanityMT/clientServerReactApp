import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Option = styled(NavLink)`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    & > span {
        color: #000;
        margin-right: 10px;
    }
`

export default Option
