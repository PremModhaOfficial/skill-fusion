import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
import { EducatorFormFields, registerRequestFields } from "./types/requestTypes"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

let makeProfileRequest = async (fields: EducatorFormFields) => {
    try {
        let response = await api.post('/api/educator/', { ...fields })
        // console.log(response.data)

        return response
    } catch (error: any) {
        // console.error(error?.response?.data)
        alert(error?.response?.data)
        alert(JSON.stringify(error?.response?.data))
        return error?.response
    }

}


let makeRegiserRequest = async ({ username, password, email }: registerRequestFields) => {
    try {
        let response = await api.post('/api/register/', { username, email, password })
        // console.log(response.data)

        return response
    } catch (error: any) {
        // console.error(error?.response?.data)
        return error?.response
    }

}

const getUserProfile = async () => {

    try {
        const response = await api.get('/api/whoami/')

        const userData = await response.data
        console.log(userData);
        return userData
        // Use userData to populate your profile form
    } catch (error) {
        console.error('Error:', error);
    }
};
export default api

export { makeRegiserRequest, getUserProfile, makeProfileRequest }
