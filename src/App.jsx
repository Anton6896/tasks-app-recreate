import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container, Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";
import {useActiveTemplates, useTableLoader, useUserGetter} from "./calls/customHooks";


const alertStyle = {
    position: 'absolute',
    zIndex: '1000',
    left: '40%'
}

const App = () => {
    const dispatch = useDispatch()
    const {alerts} = useSelector((state) => state.tasks)
    let {projectName} = useParams();

    // preload data an log in user
    const {refetch: activeFetch} = useActiveTemplates(dispatch, projectName)
    const {isLoading: tableLoading, refetch: tableFetch} = useTableLoader(dispatch, projectName)
    useUserGetter({
        tableFetch, activeFetch, projectName
    })


    return (
        <main>
            <NavbarComponent/>
            <Container>
                {alerts.text && <Alert style={alertStyle} variant={alerts.type}>{alerts.text}</Alert>}
                <FilterComponent/>
                {tableLoading ? <LoadingComponent/> : <TableComponent/>}
            </Container>
        </main>
    )
}

export default App;
