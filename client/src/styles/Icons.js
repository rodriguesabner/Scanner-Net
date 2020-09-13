import styled from 'styled-components'
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare'
import {InstagramAlt} from '@styled-icons/boxicons-logos/InstagramAlt'
import {Whatsapp} from '@styled-icons/boxicons-logos/Whatsapp'
import {LoaderCircle} from '@styled-icons/boxicons-regular/LoaderCircle'

export const Face = styled(FacebookSquare)`
  height: 20px;
  width: 20px;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`
export const Insta = styled(InstagramAlt)`
  height: 20px;
  width: 20px;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`

export const Whats = styled(Whatsapp)`
  height: 20px;
  width: 20px;
  color: #fff;
  cursor: pointer;
`

export const Loading = styled(LoaderCircle)`
  width: 60px;
  height: 120px;
  color: #52CCA8;
  margin: -60px auto 20px auto;
  -webkit-animation:spin 4s linear infinite;
  -moz-animation:spin 4s linear infinite;
  animation:spin 4s linear infinite;
  
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`