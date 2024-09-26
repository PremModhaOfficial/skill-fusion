
import { Route } from "react-router-dom";
import Educator from "./Educator";
import MyCourses from "./MyCourse";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect, useState } from "react";
import { getUserProfile } from "../api";

export default function EducatorRout() {
    let [user, setUser] = useState({
        isEducator: false,
        isStudent: false
    })
    useEffect(() => {
        getUserProfile().then((data) => {
            if (data?.educator) {
                // console.log(data.educator);
                setUser({ ...user, isEducator: true })
            } if (data?.student) {
                // console.log(data.student);
                setUser({ ...user, isStudent: true })
            }
        }).catch((error) => {
            console.error(error)
        })
    }, []);


    if (user.isEducator) {
        return <Educator />
    }
    return <ProtectedRoutes><MyCourses /></ProtectedRoutes>
}

