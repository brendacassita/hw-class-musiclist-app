
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";



const DropDown = () =>{
  return (
   
    <>
    {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
      (variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ),
    )}
  </>
  
  )
}
export default DropDown

