import {Row, Col, Button, ButtonGroup, InputGroup, FormControl} from "react-bootstrap";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {createAlert, loadData} from "../state/features/tasksSlice";
import {findBy} from "../calls";
import {useState} from "react";

const FilterComponent = () => {
    const dispatch = useDispatch()
    const {tasksList,} = useSelector((state) => state.tasks)
    const [searchValue, setSearchValue] = useState('')


    const {data: filterData, error: filterError, refetch} = useQuery(
        ['get-by-text', searchValue],
        () => {
            return findBy(searchValue)
        },
        {
            onSuccess: () => {
                console.log(filterData)
                // dispatch(loadData(data.data))
                setSearchValue('')
            },
            onError: () => {
                dispatch(createAlert({type: 'danger', text: filterError.message}))
            },
            enabled: false
        }
    )

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
