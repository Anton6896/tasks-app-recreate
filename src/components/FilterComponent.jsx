import {Row, Col} from "react-bootstrap";

const FilterComponent = () => {
    // todo move data to right side
    return (
        <filter>
            <Row>
                <Col>
                    <p>left data </p>
                </Col>
                <Col className={""}>
                    <p className={""}>some data</p>
                </Col>
            </Row>
        </filter>
    );
}

export default FilterComponent;
