import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
import { registerRequestFields } from "./types/requestTypes"

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


export default api

export { makeRegiserRequest }
