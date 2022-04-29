import {Row, Col, Button, ButtonGroup, InputGroup, FormControl} from "react-bootstrap";

const FilterComponent = () => {
    // todo move data to right side
    return (
        <div>
            <Row style={{margin: '10px 0 0 0'}}>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary" id="button-addon1">
                            Search
                        </Button>
                        <FormControl aria-label="Example text with button addon"
                                     aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col md={8}>
                    <ButtonGroup aria-label="Basic example" className="float-end">
                        <Button variant="outline-secondary">yesterday</Button>
                        <Button variant="outline-secondary">today</Button>
                        <Button variant="outline-secondary">tomorrow</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    );
}

export default FilterComponent;
