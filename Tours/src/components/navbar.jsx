import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../images/SLogo.png'

function NavB(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <img src={logo} style={({width:'40px', height:'40px'})}></img>
          <Navbar.Brand href="#home">Travel Lounge</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link onClick={handleShow} /* href="login" */>Register</Nav.Link>
          </Nav>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Work in progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>This page is under construction, We are sorry for the inconvenience</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Navbar>
        </>
    )
}
export default NavB