import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown title="OtherLinks" id="basic-nav-dropdown" style={{marginRight: "10px"}}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link style={{marginRight: "10px"}} href="#home">login|out</Nav.Link>
                        <p className={"navTextStyle"}>sdsd</p>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand href="#home">cellosign-tasks</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
