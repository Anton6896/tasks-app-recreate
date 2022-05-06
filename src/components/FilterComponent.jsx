import {Row, Col, Button, ButtonGroup, InputGroup, FormControl} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useSearchData} from "../calls/customHooks";

const FilterComponent = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const {refetch} = useSearchData({
        searchValue, setSearchValue, dispatch
    })

    const onDayFilterBtn = (day) => {

    }

    return (
        <div>
            <Row style={{margin: '70px 0 0 0'}}>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary"
                                onClick={refetch}
                                id="button-addon1">Search</Button>

                        <FormControl aria-label="search for task"
                                     placeholder="search ..."
                                     value={searchValue}
                                     onChange={(e) => {
                                         setSearchValue(e.target.value)
                                     }}
                                     aria-describedby="basic-addon1"/>
                    </InputGroup>
                </Col>
                <Col md={8}>
                    <ButtonGroup aria-label="Basic example" className="float-end">
                        <Button variant="outline-secondary">all</Button>
                        <Button variant="outline-secondary">today</Button>
                        <Button variant="outline-secondary">tomorrow</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    );
}

export default FilterComponent;
