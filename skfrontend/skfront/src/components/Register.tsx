//
// import Form from "./Form";
//
// export default function Register() {
//     return (
//         <Form route="/api/register/" method="register" />
//
//
//     )
// }
import React, { useState } from 'react';
import { registerRequestFields } from '../types/requestTypes';
import { useNavigate } from 'react-router-dom';


type RegisterProps = {
    handleSubmit: ({ username, email, password }: registerRequestFields) => Promise<any>
}


const Register = ({ handleSubmit }: RegisterProps) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let res = handleSubmit({ username, email, password })
        if (res !== undefined) {
            res.then((res: any) => {
                if (res.status === 201) {
                    navigate('/login')
                }
                console.log(res.status)
                let data = res.data ? res.data : ""
                let problems =
                    (data?.username ? data.username + "\n" : "") +
                    (data?.email ? data.email + "\n" : "") +
                    (data?.password ? data.password + "\n" : "")
                console.log(problems)
                alert(problems)
            })
        }
    };

    return (
        <div className='container-fluid m-2'>
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                <h1 className="text-2xl font-bold text-center">Register</h1>

                <div className="flex flex-col">
                    <label htmlFor="username" className="text-gray-500">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-500">email</label>
                    <input
                        type="text"
                        id="email"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-gray-500">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;
