import axios from "axios";

export const dataLoader = async () => {
    const opt = {
        method: 'GET',
        url: '/api_transactions_board'
    }
    return axios(opt);
}

export const removeTask = async () => {

}