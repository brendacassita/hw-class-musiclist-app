import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from './styles'

const Container = styled.div`
  display:flex;
  
  padding:10px;
  margin:10px;
  border: 4px dashed ${PRIMARY_DARK_COLOR};
  background-color:'#black';
  @media (max-width: 700px) {
    background-color:#feR6ea;
  }
  @media (max-width: 600px) {
    background-color: #fee6ea;
    flex-direction:column;
    align-content: center;
    flex-wrap: wrap;
  }
`

export default Container