import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  background: #EFF1F4;
  flex-direction: column;
  width: 100%;
`

export const FixedImage = styled.img`
  width: 500px;
  height: 400px;
  margin: 30px 0;
  
   //width: 100%;
  position: sticky;
  top: 150px;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`


export const FeatureItem = styled.div`
  margin-left: 60px;
  margin-bottom: 120px;
  padding: 40px;
  border-radius: 30px;
  max-width: 500px;
  
    @media only screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: -60px;
    }
`