import {useDispatch, useSelector} from "react-redux";
import {Container, ListGroup, ButtonGroup, Button, Row, Col} from "react-bootstrap";
import {useQuery} from "react-query";
import {dataLoader} from "../calls";
import {createAlert, loadData} from "../state/features/tasksSlice";
import LoadingComponent from "./LoadingComponent";
import {useState} from "react";
import DeleteModal from "./DeleteMotalComponent";
import { useParams } from "react-router-dom";

const TableComponent = () => {
    const dispatch = useDispatch()
    const {tasksList,} = useSelector((state) => state.tasks)
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState({});
    let { projectName } = useParams();

    const onSuccessData = (data) => {
        if (data){
            dispatch(loadData(data.data))
        }
    }

    const onErrorData = (error) => {
        dispatch(createAlert({type: 'danger', text: error.message}))
    }

    const {isLoading} = useQuery(
        'dataLoader',
        ()=>{dataLoader(projectName)},
        {
            onSuccess: onSuccessData,
            onError: onErrorData,
        }
    )

    const showModalSwitch = (task) => {
        let show = !showModal
        setSelectedTask(task)
        setShowModal(show)
    }

    const onOpen = (task) => {
        // open template data in new page
        console.log('open ' + task.id)
    }

    const showList = () => {
        let totalTasksAmount = tasksList?.length

        if (totalTasksAmount === 0) {
            return <ListGroup.Item as="li" style={{textAlign: 'center'}}>
                <p>Have no data to show .</p>
            </ListGroup.Item>
        }

        return (
            tasksList.map((task => (
                <ListGroup.Item as="li" key={task.id}>
                    <Row>
                        <Col lg={2} md={6} sm={6}>
                            <ButtonGroup className={'float-start'} aria-label="send | delete">
                                <Button variant="outline-secondary" onClick={() => {
                                    showModalSwitch(task)
                                }}>delete</Button>
                                <Button variant="outline-secondary" onClick={() => {
                                    onOpen(task)
                                }}>open</Button>
                            </ButtonGroup>
                        </Col>

                        <Col lg={3} md={6} sm={6} className={'order-lg-2'} style={{textAlign: 'right'}}>
                            <p className="fw-bold" style={{marginBottom: '1px'}}>{task.template.display_name}</p>
                            <small className={'text-muted'}>{task.expiration} בתוקף </small>
                        </Col>

                        <Col className={'order-lg-1'} style={{textAlign: 'right'}}>
                            {/*<p>{task.template.description}</p>*/}
                            <p>לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין
                                - הנקרא לפעמים גם דמי טקסט או
                                ג'יבריש - ומיועד להיות ממוקם בסקיצות עיצוביות</p>
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
                {
                    showModal && <DeleteModal showModalSwitch={showModalSwitch}
                                              showModal={showModal}
                                              task={selectedTask}/>
                }
            </ListGroup>
        </Container>
    );
}

export default TableComponent;
