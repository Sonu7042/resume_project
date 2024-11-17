import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SummeryApi from '../common'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Login = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const navigate = useNavigate()


    const onchange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(SummeryApi.login.url, {
            method: SummeryApi.login.method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        if (json.success) {
            toast.success(json.message)
            localStorage.setItem('token', json.token)
            navigate('/')
        }
        if (json.error) {
            toast.error(json.message)
        }


    }




    return (
        <div className=' flex items-center justify-center shadow-sm py-3'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-10 text-center border p-4 bg-white shadow-sm rounded h-[400px] w-[350px] ' >
                <h2 className='text-3xl font-medium'>Login</h2>
                <input className=' border-b outline-none' type="email" placeholder='Email' name='email' onChange={onchange} />
                <input className=' border-b outline-none' type="password" placeholder='Password' name='password' onChange={onchange} />
                <button type='submit ' className='bg-blue-500 p-2 rounded-sm font-medium hover:bg-blue-600'>Submit</button>

                <div>
                    <p>Don't have a account</p>
                    <Link to={"/signup"} className='text-blue-600 font-bold'>SignUp</Link>
                </div>

            </form>

        </div>
    )
}

export default Login
