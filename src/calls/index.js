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

export const findBy = async (data) => {
    // send request for data
    return new Promise((resolve, reject) => {
        console.log('looking for ' + data)
        resolve('ok')
    });
}