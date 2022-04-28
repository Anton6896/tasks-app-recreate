import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container, Alert} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadData, setAlert} from "./state/features/tasksSlice";
import {useQuery} from "react-query";
import {dataLoader} from "./calls";

const App = () => {
    const dispatch = useDispatch()
    const {alerts} = useSelector((state) => state.tasks)
    const {isLoading, resData, isError, error} = useQuery('dataLoader', dataLoader)

    useEffect(() => {
        if (resData) {
            dispatch(loadData(resData))
        }
    }, [resData])

    useEffect(() => {
        if (isError) {
            let err = {type: 'danger', text: error.message}
            dispatch(setAlert(err))
        }
    }, [isError])

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
