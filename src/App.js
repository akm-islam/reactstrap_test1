import React from 'react';
import Lineto from "./components/lineto_test";
import {Button,Row,Col,Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }
  clickhandler=()=>{
    console.log("Hello world")
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="sm">
          <NavbarBrand href="/">UrbanForest</NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sort by
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Atribute
                  </DropdownItem>
                  <DropdownItem>
                    Datasets
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>Components</NavLink>
              </NavItem>
              <NavItem>
                <Button color="primary" size="md" onClick={this.clickhandler}>Process</Button>
                <Button color="primary" size="md" onClick={this.toggle}>Modal</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col md="2" style={{padding:1}}>
          <div style={{backgroundColor:"rgb(224,224,224,.3)",width:"100%",height:"400px"}}></div>
          </Col>
          <Col md="10" style={{padding:1}}>
          <div style={{backgroundColor:"rgb(224,224,224,.3)",width:"100%",height:"400px"}}>
          </div>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop={this.state.backdrop} size="lg">
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Row>
          <Col md="2" style={{padding:1}}>
          <div style={{backgroundColor:"rgb(224,224,224,.3)",width:"100%",height:"400px"}}></div>
          </Col>
          <Col md="10" style={{padding:1}}>
          <div style={{backgroundColor:"rgb(224,224,224,.3)",width:"100%",height:"400px"}}>
          </div>
          </Col>
        </Row>
          </ModalBody>
        </Modal>

      </div>
    );
  }
}