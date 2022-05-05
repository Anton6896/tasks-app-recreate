import {useDispatch, useSelector} from "react-redux";
import {Container, ListGroup, ButtonGroup, Button, Row, Col} from "react-bootstrap";
import {useQuery} from "react-query";
import {dataLoader} from "../calls";
import {createAlert, loadData} from "../state/features/tasksSlice";
import LoadingComponent from "./LoadingComponent";

const TableComponent = () => {
    const dispatch = useDispatch()
    const {tasksList,} = useSelector((state) => state.tasks)


    const onSuccessData = (data) => {
        dispatch(loadData(data.data))
    }

    const onErrorData = (error) => {
        dispatch(createAlert({type: 'danger', text: error.message}))
    }

    const {isLoading} = useQuery(
        'dataLoader',
        dataLoader,
        {
            onSuccess: onSuccessData,
            onError: onErrorData,
        }
    )

    const onDelete = (task) => {
        // open modal
        console.log('delete ' + task.id)
    }

    const onOpen = (task) => {
        // open template data in new page
        console.log('open ' + task.id)
    }

    const showList = () => {
        return (
            tasksList.map((task => (
                <ListGroup.Item as="li" key={task.id}>
                    <Row style={{textAlign: 'right'}}>
                        <Col xs lg md={3} className={''}>
                            <ButtonGroup className={'float-start'} aria-label="send | delete">
                                <Button variant="outline-secondary" onClick={() => {onDelete(task)}}>delete</Button>
                                <Button variant="outline-secondary" onClick={() => {onOpen(task)}}>open</Button>
                            </ButtonGroup>
                        </Col>

                        <Col xs lg={3} md={4} className={'order-lg-2'}>
                            <p className="fw-bold" style={{marginBottom: '1px'}}>{task.template.display_name}</p>
                            <small className={'text-muted'}>{task.expiration} בתוקף </small>
                        </Col>
                        <Col md={'6'} className={'order-lg-1'}>
                            <p>{task.template.description}</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )))
        )
    }

    return (
        <Container style={{marginTop: '10px'}}>
            <ListGroup as="ol">
                {
                    isLoading ? (<LoadingComponent/>) : (tasksList && showList())
                }
            </ListGroup>
        </Container>
    );
}

export default TableComponent;
