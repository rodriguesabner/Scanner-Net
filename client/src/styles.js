import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  max-width: 1040px;
  margin: auto;
  padding: 100px 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: #302D41;
  color: #fff;
  height: 40px;
  width: 100%;
`

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`

export const RigthDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 500px;
  //height: 300px;
  object-fit: cover;  
  border-radius: 0 50px;
  margin: auto;
  display: flex;
  
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;

    @-webkit-keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
    @keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 28px;
`

export const Description = styled.p`
  color: #777;
`

export const Input = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  
  margin-right: 10px;
  
  border-radius: 5px;
  padding: 10px 10px;
  outline: 0;
  transition-duration: 200ms;
  
  &:hover{
    -webkit-box-shadow: 2px 5px 42px -8px rgb(63,200,170, 0.61);
    -moz-box-shadow: 2px 5px 42px -8px rgba(63,200,170, 0.61);
    box-shadow: 2px 5px 42px -8px rgb(63,200,170, 0.61);
    transition-duration: 400ms;
  }
  
  &:focus{
    -webkit-box-shadow: 2px 5px 42px -8px rgb(63,200,170, 1);
    -moz-box-shadow: 2px 5px 42px -8px rgba(63,200,170, 1);
    box-shadow: 2px 5px 42px -8px rgb(63,200,170, 1);
  }
`

export const Button = styled.button`
  background: #52CCA8;
  color: #000;
  
  height: 40px;
    
  border: 0;
  border-radius: 5px;
  outline: 0;
  
  margin: 20px 0;
  padding: 0 40px;
  
  font-weight: 600;
  cursor:pointer;
  
  transition-duration: 300ms;
  
  &:hover{
    background: #30dba8;
    -webkit-box-shadow: 2px 5px 42px -8px rgb(63,200,170, 0.61);
    transition-duration: 300ms;
  }
`

export const RepeaterPort = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: default;
  text-align: center;
  
  .title{
    margin: 0 20px;
  }
  
  .description{
    text-align: center;
  }
`

export const FixedImage = styled.img`
  width: 500px;
  height: 400px;
  margin: 30px 0;
  
   //width: 100%;
  position: sticky;
  top: 150px;
`


export const FeatureItem = styled.div`
  margin-left: 60px;
  margin-bottom: 120px;
  padding: 40px;
  border-radius: 30px;
  max-width: 500px;
`