import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode"; // Use default import for jwt-decode
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../Constants";
import { useState, useEffect, ReactNode } from "react";
import api from "../Api";

// Define the type for children prop
interface ProtectedRouteProps {
    children: ReactNode;
}

// Define an interface for the JWT token structure
interface DecodedToken {
    exp: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", { refresh: refreshToken });

            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            setIsAuthorized(false);
            return;
        }

        // Type the result of jwtDecode with the DecodedToken interface
        const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
