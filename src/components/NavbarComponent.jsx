import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createAlert, setWithSettingsData} from "../state/features/tasksSlice";
import {useQuery} from "react-query";
import {getWithSettings} from "../calls";

const NavbarComponent = () => {
    const dispatch = useDispatch()
    const {withSettingsTaskList,} = useSelector((state) => state.tasks)

    //load data
    const onSuccessData = (data) => {
        dispatch(setWithSettingsData(data.data))
    }

    const onErrorData = (error) => {
        dispatch(createAlert({type: 'danger', text: error.message}))
    }

    useQuery(
        'dataWithSettings',
        getWithSettings,
        {
            onSuccess: onSuccessData,
            onError: onErrorData,
        }
    )

    const showDropdownLinks = () => {
        if (withSettingsTaskList) {
            console.log(withSettingsTaskList)
            return withSettingsTaskList.map(itemLink => (
                <NavDropdown.Item key={itemLink.template_id}
                                  href="#">
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
