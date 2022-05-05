import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const NavbarComponent = () => {
    const dispatch = useDispatch()
    const {withSettingsTaskList,} = useSelector((state) => state.tasks)
    let {projectName} = useParams();

    const onSsessionCreate = (item) => {
        console.log(item)
        console.log(projectName)
    }

    const showDropdownLinks = () => {
        if (withSettingsTaskList) {
            return withSettingsTaskList.map(itemLink => (
                <NavDropdown.Item key={itemLink.template_id}
                                  href="#"
                                  onClick={() => {
                                      onSsessionCreate(itemLink)
                                  }}>
                    {itemLink.display_name}
                </NavDropdown.Item>
            ))

        } else {
            return <NavDropdown.Item disabled>No active templates</NavDropdown.Item>
        }
    }

    return (
        <Navbar bg="light" expand="lg" fixed={'top'}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="OtherLinks" id="basic-nav-dropdown" style={{marginRight: "10px"}}>
                            {showDropdownLinks()}
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
