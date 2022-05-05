import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

/*
*
Request URL: http://127.0.0.1:8015/api/internal/projects/project/template/?withSettings=true&status=publish&page_size=5000

* */

export const dataLoader = async (projectName) => {
    const opt = {
        method: 'GET',
        url: `/api/internal/projects/${projectName}/transactions_board/?with_template=true&assignee=anton&with_strudel=true&show_alive=true&page_size=200`
         // url: '/api_transactions_board'
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

export const getWithSettings = async (projectName) => {
    const opt = {
        method: 'GET',
        url: `/api/internal/projects/${projectName}/template/?withSettings=true&status=publish&page_size=5000`
        // url: '/api_template_withSettings_true'
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