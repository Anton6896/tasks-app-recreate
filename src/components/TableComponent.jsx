import {useSelector} from "react-redux";

const TableComponent = () => {
    const {data, isLoading} = useSelector((state) => state.tasks)

    console.log(data)

    // have an loading here !?

    return (
        <div>
            <p> data: </p>
        </div>
    );
}

export default TableComponent;
