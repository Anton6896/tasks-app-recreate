import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container, Alert} from "react-bootstrap";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const alertStyle = {
    position: 'absolute',
    zIndex: '1000',
    left: '40%'
}

const App = () => {
    const {alerts} = useSelector((state) => state.tasks)

    const tasksBody = () => {
        return (
            <main>
                <NavbarComponent/>
                <Container>
                    {alerts.text && <Alert style={alertStyle} variant={alerts.type}>{alerts.text}</Alert>}
                    <FilterComponent/>
                    <TableComponent/>
                </Container>
            </main>
        )
    }

    return (
        <Router>
            <Routes>
                <Route path={'/:projectName/tasks'} element={tasksBody()}/>
            </Routes>
        </Router>
    );
}

export default App;
