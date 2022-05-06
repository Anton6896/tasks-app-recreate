import {useQuery} from "react-query";
import {createAlert, loadData, setWithSettingsData} from "../state/features/tasksSlice";
import {dataLoader, getMe, getWithSettings} from "./index";

export const useTableLoader = (dispatch, projectName) => {
    return useQuery(
        'dataLoader2',
        () => {
            return dataLoader(projectName)
        },
        {
            onSuccess: (tableData) => {
                if (tableData) {
                    dispatch(loadData(tableData.data))
                }
            },
            onError: (tableError) => {
                dispatch(createAlert({type: 'danger', text: tableError.message}))
            },
            enabled: false
        }
    )
}

export const useActiveTemplates = (dispatch, projectName) => {
    return useQuery(
        'dataWithSettings',
        () => {
            return getWithSettings(projectName)
        },
        {
            onSuccess: (data) => {
                if (data) {
                    dispatch(setWithSettingsData(data.data))
                }
            },
            onError: (activeError) => {
                dispatch(createAlert({type: 'danger', text: activeError.message}))
            },
            enabled: false
        }
    )
}

export const useUserGetter = ({projectName, tableFetch, activeFetch}) => {
    return useQuery(
        'userMe',
        () => {
            return getMe(projectName)
        },
        {
            onSuccess: () => {
                tableFetch()
                activeFetch()
            },
            onError: () => {
                if (projectName) {
                    window.location.replace(`/login/${projectName}?next=${window.location.pathname}`);
                } else {
                    window.location.replace(`/login?next=${window.location.pathname}`);
                }
            }
        }
    )
}