import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container, Alert} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadData, setError} from "./state/features/tasksSlice";
import {useQuery} from "react-query";
import {dataLoader} from "./calls";

const App = () => {
    const dispatch = useDispatch()
    const {alerts} = useSelector((state) => state.tasks)
    const {isLoading, data, isError, error} = useQuery('dataLoader', dataLoader)

    useEffect(() => {
        if (isError) {
            let data = {type: 'danger', text: error.message}
            dispatch(setError(data))
            return
        }

        if (data) {
            dispatch(loadData(data))
        }
    }, [data])

    return (
        <main>
            <NavbarComponent/>
            {
                isLoading ?
                    <div>
                        <p> loading ... </p>
                    </div> :
                    <Container>
                        {alerts.text && <Alert variant={alerts.type}>{alerts.text}</Alert>}
                        <FilterComponent/>
                        <TableComponent/>
                    </Container>
            }
        </main>
    );
}

export default App;
