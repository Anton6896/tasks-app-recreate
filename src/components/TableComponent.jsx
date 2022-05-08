import {useDispatch, useSelector} from "react-redux";
import {Container, ListGroup, ButtonGroup, Button, Row, Col} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import DeleteModal from "./DeleteMotalComponent";
import {useParams} from "react-router-dom";
import {useUpdateTableLoader} from "../calls/customHooks";

function getWindowDimensions(hasWindow) {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height,
    };
}

const TableComponent = () => {
    const {tasksList, tasksListMeta, } = useSelector((state) => state.tasks)
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState({});
    const listInnerRef = useRef();
    const hasWindow = typeof window !== 'undefined';
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(hasWindow));

    const dispatch = useDispatch()
    let {projectName} = useParams();

    const showModalSwitch = (task) => {
        let show = !showModal
        setSelectedTask(task)
        setShowModal(show)
    }

    const onOpen = (task) => { // open template data in new page
        console.log('open ' + task.id)
    }

    useEffect(() => { // watch window dimensions
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions(hasWindow));
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    const {refetch: loadMoreTasks} = useUpdateTableLoader(dispatch, projectName, tasksListMeta?.links?.next)

    const onPageBottom = () => { // load more tasks if exists
        if (listInnerRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight && tasksListMeta?.many && !!tasksListMeta.links.next) {
                loadMoreTasks()
            }
        }
    }

    //

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
                            <p>{task.template.description}</p>
                        </Col>

                    </Row>
                </ListGroup.Item>
            )))
        )
    }

    return (
        <Container style={{marginTop: '10px'}}>
            <ListGroup as="ol"
                       ref={listInnerRef}
                       style={{
                           height: `${windowDimensions.height - 200}px`,
                           overflowY: "auto",
                           marginTop: "10px"
                       }}
                       onScroll={onPageBottom}>
                {
                    tasksList && showList()
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
