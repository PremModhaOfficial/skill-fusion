
import { Navigate, useNavigate } from "react-router-dom";
import Educator from "./Educator";
import { useEffect, useState } from "react";
import { getUserProfile } from "../api";

export default function EducatorRout() {
    let [user, setUser] = useState({
        isEducator: false,
        isStudent: false
    })
    let navigate = useNavigate();
    useEffect(() => {
        getUserProfile().then((data) => {
            console.log(data)
            if (data?.educator) {
                console.log(data.educator);
                navigate('/educator/dashboard')
                setUser({ ...user, isEducator: true })
            } if (data?.student) {
                // console.log(data.student);
                setUser({ ...user, isStudent: true })
            }
        }).catch((error) => {
            console.error(error)
        })
    }, []);


    if (!user.isEducator) {
        return <Educator />
    } else {
        return <Navigate to="/educator/dashboard" />
    }
}

