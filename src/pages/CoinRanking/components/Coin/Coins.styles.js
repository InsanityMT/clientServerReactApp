import styled from 'styled-components'

const CoinContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
    font-family: 'Noto Sans', sans-serif;
    color: #000000ff;
    text-align: left;
    font-size: 18px;
    width: 70%;
    margin-left: 15%;
    h3 {
        text-align: center;
    }
`

const CoinDescription = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');
    font-family: 'Titillium Web', sans-serif;
    color: #4d4b4b;
    font-size: 19px;
`

const CoinName = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
`

const CoinHeader = styled.div`
    width: 100%;
    color: #000000ff;
`

const CoinPrice = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
`

export { CoinName, CoinContainer, CoinPrice, CoinDescription, CoinHeader }
