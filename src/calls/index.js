import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const dataLoader = async () => {
    const opt = {
        method: 'GET',
        url: '/api_transactions_board'
    }
    return axios(opt);
}

export const removeTask = async () => {
    console.log('send remove data query')
}

export const findBy = async (data) => {
    // send request for data
    return new Promise((resolve, reject) => {
        console.log('looking for ' + data)
        resolve('ok')
    });
}

export const getWithSettings = async () => {
    const opt = {
        method: 'GET',
        url: '/api_template_withSettings_true'
    }
    return axios(opt);
}

export const createSessionRequest = async (projectName, templateId) => {
    const opt = {
        method: 'POST',
        url: `/api/internal/projects/${projectName}/transactions_board/create_from_template/`,
        data: JSON.stringify({'template': templateId})
    }
    return axios(opt);
}