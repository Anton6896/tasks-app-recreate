import {useSelector} from "react-redux";

const TableComponent = () => {
    const {data, isLoading} = useSelector((state) => state.tasks)

    return (
        <div>
            <p> data: {data.length}</p>
        </div>
    );
}

export default TableComponent;
