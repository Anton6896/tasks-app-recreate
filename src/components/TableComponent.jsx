import {useSelector} from "react-redux";
import {Container, ListGroup, ButtonGroup, Button, Row, Col} from "react-bootstrap";


const TableComponent = () => {
    const {data} = useSelector((state) => state.tasks)

    const showList = () => {
        return (
            data.map((task => (
                <ListGroup.Item as="li" key={task.id}>
                    <Row style={{textAlign: 'right'}}>
                        <Col xs lg md={3} className={''}>
                            <ButtonGroup className={'float-start'} aria-label="send | delete">
                                <Button variant="secondary">delete</Button>
                                <Button variant="secondary">open</Button>
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
                {data && showList()}
            </ListGroup>
        </Container>
    );
}

export default TableComponent;
