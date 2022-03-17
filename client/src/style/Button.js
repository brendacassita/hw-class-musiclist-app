import styled, {css} from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from './styles'


const Button = styled.button`
  padding: 5px 12px;
  border-radius:2px;
  border:none;
  background-color: ${PRIMARY_COLOR};
  color:white;
  &:hover{
    background-color: ${PRIMARY_DARK_COLOR};
    cursor: pointer;
  }
  ${(props)=>
    props.outline && css`
    background-color: white;
    border: 1px solid ${PRIMARY_COLOR};
    color: ${PRIMARY_COLOR};
    &:hover{
        background-color: ${PRIMARY_COLOR};
        color: white;
      }
    `
 }
`
export default Button