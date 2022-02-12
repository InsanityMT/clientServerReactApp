import styled from 'styled-components'

const CardStyles = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
    font-family: 'Noto Sans', sans-serif;
    border-radius: 8px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 14em;
    color: black;
    font-size: 20px;
    border: 2px solid #2254C4;
    text-align: center;
    width: 20%;
`
const CardContent = styled.div`
    padding: 10px;
    color: #808080FF;
    display: flex;
    font-size: 24px;
    flex-direction: column;
`
const CardName = styled.div`
    font-family: 'Prompt', sans-serif;
    font-size: 28px;
    font-weight: bold;
    padding: 10px;
`

export {
    CardStyles,
    CardContent,
    CardName
}
