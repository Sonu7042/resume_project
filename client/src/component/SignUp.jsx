import { useState } from 'react'
import SummeryApi from '../common/index.jsx'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {

    const [data, setData] = useState({ name: "", email: "", password: "", contact: "" })

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
        const response = await fetch(SummeryApi.signup.url, {
            method: SummeryApi.signup.method,
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)

        })


        const json = await response.json()


        if (json.success) {
            toast.success(json.message)
            navigate('/login')
        }
        if (json.error) {
            toast.error(json.message)
        }




    }


    return (
        <div className=' flex items-center justify-center shadow-sm py-3'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-8 text-center border p-4 bg-white shadow-sm rounded h-[400px] w-[350px] ' >
                <h2 className='text-3xl font-medium'>SignUp</h2>
                <input className=' border-b outline-none' type="text" placeholder='Name' name='name' onChange={onchange} />
                <input className=' border-b outline-none' type="email" placeholder='Email' name='email' onChange={onchange} />
                <input className=' border-b outline-none' type="password" placeholder='Password' name='password' onChange={onchange} />
                <input className=' border-b outline-none' type="number" placeholder='Contact' name='contact' onChange={onchange} />

                <button type='submit ' className='bg-blue-500 p-2 rounded-sm font-medium hover:bg-blue-600'>Submit</button>

            </form>

        </div>
    )
}

export default SignUp
