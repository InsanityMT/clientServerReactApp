import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PostsContainer = styled.div`
    margin-left: 115px;
    width: 80%;
`

const PostContainer = styled.div`
    width: 60%;
    margin-left: 115px;
    color: #808080ff;
    border: 1px solid #808080ff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    span {
        font-weight: 600;
        font-size: 22px;
    }
`

const PostTittle = styled(NavLink)`
    font-weight: 600;
    font-size: 26px;
    color: #000;
    text-decoration: none;
`

const PostText = styled.div`
    font-size: 18px;
`

export { PostsContainer, PostTittle, PostText, PostContainer }
