import axios from "axios";
import {useQuery} from "react-query";
import {createAlert, loadData} from "../state/features/tasksSlice";
import {useDispatch} from "react-redux";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const dataLoader = async (projectName) => {
    const opt = {
        method: 'GET',
        // url: `/api/internal/projects/${projectName}/transactions_board/?with_template=true&assignee=anton&with_strudel=true&show_alive=true&page_size=200`
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

export const getWithSettings = async (projectName) => {
    const opt = {
        method: 'GET',
        // url: `/api/internal/projects/${projectName}/template/?withSettings=true&status=publish&page_size=5000`
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

export const getMe = async (projectName) => {

    const opt = {
        method: 'GET',
        // url: `/api/internal/me?project=${projectName}`
        url: '/api_me'
    }

    return axios(opt)
}

// export const  fff = async ()=>{
//     // const dispatch = useDispatch()
//
//
//     const {isLoading: tableLoading, refetch: tableFetch} = useQuery(
//         'dataLoader',
//         () => {
//             return dataLoader(projectName)
//         },
//         {
//             onSuccess: (tableData) => {
//                 if (tableData) {
//                     dispatch(loadData(tableData.data))
//                 }
//             },
//             onError: (tableError) => {
//                 dispatch(createAlert({type: 'danger', text: tableError.message}))
//             },
//             enabled: false
//         }
//     )
// }