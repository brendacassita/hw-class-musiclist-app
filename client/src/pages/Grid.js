import styled from 'styled-components'
import React from "react"
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Container from '../style/Container';


const Grid = () =>{
  return (
    <div>
      <h1>Grid Practice</h1>
     
      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
</div>
  )
}
export default Grid

