import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

const PostTittle = styled.div`
    font-weight: 600;
    font-size: 26px;
    color: #000;
    text-decoration: none;
`

const CommentsContainer = styled.div`
    border: 1px solid #808080ff;
    border-radius: 30px;
    padding: 20px;
`

const PostText = styled.div`
    font-size: 18px;
`

export { PostContainer, PostText, PostTittle, CommentsContainer }
