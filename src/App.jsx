import 'bootstrap/dist/css/bootstrap.min.css';


import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <main>
            <NavbarComponent/>
            <Container>
                <FilterComponent/>
                <TableComponent/>
            </Container>

        </main>
    );
}

export default App;
