import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
import { EducatorFormFields, registerRequestFields, studentFields } from "./types/requestTypes"

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


let makeStudentRegiserRequest = async (student: studentFields) => {
    try {
        let response = await api.post('/api/student/register', { ...student })
        console.log(response.data)

        return response
    } catch (error: any) {
        console.error(error?.response?.data)
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

// const RedirectIfAlreadyEducator = (toPath: string) => {
//     let responce = getUserProfile()
//     try {
//         return responce.then((js: any) => { return (js.educator !== undefined ? true : false) })
//     } catch (error) {
//         console.log(JSON.stringify(error))
//         return false
//     }
// }

type PaymentDetails = { cardType: string, cardHolderName: string, cardNumber: string, cvv: string, expiryMonth: string, expiryYear: string }

const makePayment = async (pD: PaymentDetails) => {
    api.post('/api/payment/', { ...pD })

}

const makeStudentProgress = async (courseId: string) => {
    api.post('/api/student/made-progress/', { courseId })
}


const getUserProfile = async () => {

    try {
        const response = await api.get('/api/whoami/')

        const userData = await response.data
        // console.log(userData);
        return userData
        // Use userData to populate your profile form
    } catch (error) {
        console.error('Error:', error);
        return error
    }
};
export default api

export { makeStudentProgress, makeRegiserRequest, getUserProfile, makeProfileRequest, makePayment, makeStudentRegiserRequest }
