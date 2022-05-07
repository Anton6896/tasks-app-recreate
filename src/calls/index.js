import axios from "axios";

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const dataLoader = async (projectName, nextUrl = null) => {
    let baseUrl = `http://127.0.0.1:8015/api/internal/projects/${projectName}/transactions_board/?with_template=true&assignee=anton&with_strudel=true&show_alive=true&page_size=8`
    const opt = {
        method: 'get',
        url: nextUrl ? nextUrl : baseUrl,
        headers: {
            'Authorization': 'Token 322bc98ee626b71869546c1b21be1c41b8787762'
        }
    }
    return axios(opt);
}

export const removeTask = async () => {
    console.log('send remove data query')
}

export const findBy = async (searchKey) => {
    // send request for data
    return new Promise((resolve, reject) => {
        console.log('looking for ' + searchKey)
        resolve('ok')
    });
}

export const getWithSettings = async (projectName) => {
    const opt = {
        method: 'GET',
        url: `http://127.0.0.1:8015/api/internal/projects/${projectName}/template/?withSettings=true&status=publish&page_size=5000`,
        // url: '/api_template_withSettings_true'
        headers: {
            'Authorization': 'Token 322bc98ee626b71869546c1b21be1c41b8787762'
        }
    }
    return axios(opt);
}

export const createSessionRequest = async (projectName, templateId) => {
    const opt = {
        method: 'POST',
        url: `http://127.0.0.1:8015/api/internal/projects/${projectName}/transactions_board/create_from_template/`,
        data: JSON.stringify({'template': templateId}),
        headers: {
            'Authorization': 'Token 322bc98ee626b71869546c1b21be1c41b8787762'
        }
    }
    return axios(opt);
}


export const getMe = async (projectName) => { // why do i need to use this in this app ?
    const opt = {
        method: 'GET',
        // url: `/api/internal/me?project=${projectName}`
        url: '/api_me'
    }
    return axios(opt)
}
