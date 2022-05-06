import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import FilterComponent from "./components/FilterComponent";
import TableComponent from "./components/TableComponent";
import {Container, Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {createAlert, loadData, setWithSettingsData} from "./state/features/tasksSlice";
import {dataLoader, getMe, getWithSettings} from "./calls";
import LoadingComponent from "./components/LoadingComponent";
import {useEffect} from "react";


const alertStyle = {
    position: 'absolute',
    zIndex: '1000',
    left: '40%'
}

const App = () => {
    const dispatch = useDispatch()
    const {alerts} = useSelector((state) => state.tasks)
    let {projectName} = useParams();

    const {refetch: activeFetch} = useQuery(
        'dataWithSettings',
        () => {
            return getWithSettings(projectName)
        },
        {
            onSuccess: (data) => {
                if (data) {
                    dispatch(setWithSettingsData(data.data))
                }
            },
            onError: (activeError) => {
                dispatch(createAlert({type: 'danger', text: activeError.message}))
            },
            enabled: false
        }
    )

    const {isLoading: tableLoading, refetch: tableFetch} = useQuery(
        'dataLoader',
        () => {
            return dataLoader(projectName)
        },
        {
            onSuccess: (tableData) => {
                if (tableData) {
                    dispatch(loadData(tableData.data))
                }
            },
            onError: (tableError) => {
                dispatch(createAlert({type: 'danger', text: tableError.message}))
            },
            enabled: false
        }
    )

    useQuery(
        'userMe',
        () => {
            return getMe(projectName)
        },
        {
            onSuccess: () => {
                tableFetch()
                activeFetch()
            },
            onError: () => {
                if (projectName) {
                window.location.replace(`/login/${projectName}?next=${window.location.pathname}`);
                } else {
                    window.location.replace(`/login?next=${window.location.pathname}`);
                }
            }
        }
    )


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
