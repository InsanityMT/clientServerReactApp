import styled from 'styled-components'

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px;
  border-bottom: 1px solid #808080FF;
  :last-child {
    border: none;
  }
`

const MainInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
`

const AdditionalInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 15px 15px;
  width: 100%;
`

const Address = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 15px 15px;
  width: 100%;
`

export {
    UserContainer,
    MainInformation,
    AdditionalInformation,
    Address
}