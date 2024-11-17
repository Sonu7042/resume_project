import React, { useContext, useState } from 'react';
import SummeryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
        role: ''
    });

    const { show } = useContext(Context);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(SummeryApi.add.url, {
            method: SummeryApi.add.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const json = await response.json();

        if (json.success) {
            toast.success(json.message);
            setFormData({
                name: '',
                email: '',
                password: '',
                contact: '',
                role: ''
            });
        } else {
            toast.error(json.message);
        }

        show();
    };

    return (
        <div className='flex justify-center mt-8 px-4 sm:px-0'>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-4 lg:flex-row sm:gap-2 border-none w-full justify-center max-w-6xl'>
                <input type="text" className='p-2 rounded w-full sm:w-auto' name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
                <input type="email" className='p-2 rounded w-full sm:w-auto' name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
                <input type="password" className='p-2 rounded w-full sm:w-auto' name="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
                <input type="number" className='p-2 rounded w-full sm:w-auto' name="contact" value={formData.contact} placeholder="Contact" onChange={handleChange} required />
                <select name="role" className='p-2 rounded w-full sm:w-auto' onChange={handleChange} value={formData.role} required>
                    <option value="">Select Role</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Institute">Institute</option>
                </select>
                <button type="submit" className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-medium w-full sm:w-auto'>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
