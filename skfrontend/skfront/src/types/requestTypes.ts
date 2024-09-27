
type registerRequestFields = {
    username: string,
    email: string,
    password: string,
}
type studentFields = {
    name: string,
    phone: string,
    email: string,
    date_of_birth: string,
    location: string,
    institute: string,
}


type EducatorFormFields = {
    adharCard?: any,
    date_of_birth: string,
    email: string,
    experiance: number | string,
    location: string,
    name: string,
    phone: string,
    profileImage?: any,
    social_links: string,
}


export type { studentFields, registerRequestFields, EducatorFormFields }
