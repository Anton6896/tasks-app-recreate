import {useSelector} from "react-redux";
import {Container, Alert, ListGroup, Badge, ButtonGroup, Button, Row, Col} from "react-bootstrap";


const TableComponent = () => {
    const {data, isLoading} = useSelector((state) => state.tasks)

    const showList = () => {

    }

    return (
        <Container style={{marginTop: '10px'}}>
            <ListGroup as="ol">
                <ListGroup.Item as="li">
                    <Row style={{textAlign: 'right'}}>
                        <Col xs lg md={3} className={''}>
                            <ButtonGroup className={'float-start'} aria-label="send | delete">
                                <Button variant="secondary">Left</Button>
                                <Button variant="secondary">Right</Button>
                            </ButtonGroup>
                        </Col>
                        <Col xs lg={3} md={4} className={'order-lg-2'}>
                            <p className="fw-bold" style={{marginBottom: '1px'}}>כגדכג גכ דגכ דגכגד כד דגכ ד</p>
                            <small className={'text-muted'} style={{}}> this is the date place </small>
                        </Col>

                        <Col md={'6'} className={'order-lg-1'}>
                            <p>
                                אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט אמיתי אחר.
                            </p>
                        </Col>

                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default TableComponent;
