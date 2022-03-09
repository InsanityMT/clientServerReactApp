import styled from 'styled-components'

const PostContainer = styled.div`
    width: 100%;
    color: #808080FF;
    border: 1px solid #808080FF;
    border-radius: 10px;
    padding: 20px;
`

const PostTittle = styled.div`
    font-weight: 500;
    font-size: 22px;
    color: #000;
`

const PostText = styled.div`
    font-size: 18px;
`

export {
    PostContainer,
    PostText,
    PostTittle
}