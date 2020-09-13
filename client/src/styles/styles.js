import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 28px;
  
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const Description = styled.span`
  color: #777;
  margin-bottom: 20px;
`