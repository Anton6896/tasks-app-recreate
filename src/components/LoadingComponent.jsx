import {ListGroup, Placeholder, Row, Col} from "react-bootstrap";

const LoadingComponent = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col className={'float-start'}>
                        <Placeholder animation="glow">
                            <Placeholder xs={2}/> <Placeholder xs={2}/>
                        </Placeholder>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Placeholder animation="glow">
                            <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                            <Placeholder xs={6}/> <Placeholder xs={8}/>
                        </Placeholder>
                    </Col>
                </Row>

            </ListGroup.Item>

            <ListGroup.Item>
                <Row>
                    <Col className={'float-start'}>
                        <Placeholder animation="glow">
                            <Placeholder xs={2}/> <Placeholder xs={2}/>
                        </Placeholder>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Placeholder animation="glow">
                            <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                            <Placeholder xs={6}/> <Placeholder xs={8}/>
                        </Placeholder>
                    </Col>
                </Row>

            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col className={'float-start'}>
                        <Placeholder animation="glow">
                            <Placeholder xs={2}/> <Placeholder xs={2}/>
                        </Placeholder>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Placeholder animation="glow">
                            <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                            <Placeholder xs={6}/> <Placeholder xs={8}/>
                        </Placeholder>
                    </Col>
                </Row>

            </ListGroup.Item>

            <ListGroup.Item>
                <Row>
                    <Col className={'float-start'}>
                        <Placeholder animation="glow">
                            <Placeholder xs={2}/> <Placeholder xs={2}/>
                        </Placeholder>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Placeholder animation="glow">
                            <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                            <Placeholder xs={6}/> <Placeholder xs={8}/>
                        </Placeholder>
                    </Col>
                </Row>

            </ListGroup.Item>
        </ListGroup>
    );
}

export default LoadingComponent;
