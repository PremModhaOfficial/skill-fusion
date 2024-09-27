import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { all } from "axios";

function Form({ route, method }: { route: string, method: string }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            // console.log(error)
            alert("username or password is incorrect")
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 items-center">
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-center md:text-left lg:text-center">
                {name}
            </h1>
            <input
                className="form-input block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 md:w-3/4 lg:w-1/2"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            {method === 'login' ? "" : <input
                className="form-input block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 md:w-3/4 lg:w-1/2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />}
            <input
                className="form-input block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 md:w-3/4 lg:w-1/2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button
                className="form-button px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 cursor-pointer md:w-1/2 lg:w-1/3"
                type="submit"

            >
                {name}
            </button>
        </form>


    );
}

const LoadingIndicator = () => {
    return <div className="loading-container">
        <div className="loader"></div>
    </div>
}

export default Form
