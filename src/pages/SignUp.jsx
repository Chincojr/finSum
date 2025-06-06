import React, { useState } from 'react';

function SignUp() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        income: '',
        expense: ''
    }); 

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        console.log(form); //just logging for now
    };

    return (
        <div>
            <div>
                <h2>Create your Financial Persona...</h2>

                <div>
                    <span>Step 1</span>
                    <span>Step 2</span>
                </div>

                <form className='flex flex-col gap-6'>
                    <div>
                        <label className='block mb-1 text-sm text-gray-700'>What's your name?</label>
                        <input 
                            type="text" 
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-50'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;