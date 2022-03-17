import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from './styles'

const Container = styled.div`
  display:flex;
  
  padding:20px;
  margin:20px;
  border: 2px dashed ${PRIMARY_COLOR};
  background-color:'#fee6ea';
  @media (max-width: 700px) {
    background-color:#fee6ea;
  }
  @media (max-width: 500px) {
    background-color: #fee6ea;
    flex-direction:column;
    align-content: center;
    flex-wrap: wrap;
  }
`

export default Container