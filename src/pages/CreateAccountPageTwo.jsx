import React, { useState } from 'react';
import FormField from '../component/FormField';
import Spinner from '../component/Spinner';

import logo from '../Assests/Frame 27.svg'
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react'; 
import avatar from '../Assests/Rectangle.svg';

const CreateAccountPageTwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    financialObligation: '',
    interest: '',

  });

  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
   const onClick = () => {
    return navigate('/')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    

    // Simulate async delay
    setTimeout(() => {
      // Here is where the api will be called
      console.log(formData);
      return navigate('/signUpcompleted')
      
      
    }, 2000);
  };

  return (
    <div className="flex h-screen">
     
      <div className="flex flex-col flex-1">
        
        <nav className="h-[100px]  relative bg-white  px-6 flex items-center justify-between " 
            
        >
          <div className="h-[100px] flex items-center px-3 pt-6">
            <img src={logo} alt="Finsum logo" className="h-8 w-auto" />
          </div>
            <div className="flex items-center space-x-6 ">
                <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
                    <Bell className="h-6 w-6"/>
                </button>
                <img 
                    src={avatar}
                    alt="User Avatar" 
                    className="h-10 w-10 rounded-full object-cover border border-gray-300" />
            </div>
        </nav>
        {/* <Navbar /> */}
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
          <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              Create Your Financial Persona...
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 border">
              {/* Step Progress */}
              <div className=" w-full inline-flex items-center mb-6 space-x-4 justify-center">
                <div className="w-full text-4x1 text-indigo-600 font-medium rounded border-b-4 border-indigo-600 pb-1">
                  Step 1
                </div>
                <div className=" w-full text-4x1 text-indigo-600 font-medium rounded border-b-4 border-indigo-600 pb-1">
                  Step 2
                </div>
              </div>

              {loading ? (
                <Spinner loading={loading} />
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div className="mb-4">
                      <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                      >Financial Obligations?</label
                      >
                      <select
                        name="financialObligation"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={formData.financialObligation}
                        onChange={handleChange}
                     
                      >
                        <option value="Full-Time"></option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <FormField
                      name="interest"
                      title="What are your interests?"
                      type="text"
                      value={formData.interest}
                      onChange={handleChange}

                    />
                    <div className="flex justify-center mt-6">
                      <button
                        type="submit"
                        className="w-64 bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-600"
                      >
                        Create Persona
                      </button>
                    </div>


                    <div className="flex flex-row justify-start mt-6">
                      <button
                         onClick={onClick}
                        className="flex text-white  font-medium px-6 py-2  justify-center"
                      >
                        <div className='flex flex-row justify-between'>
                          <FaAngleDoubleLeft className='text-gray-300 text-3xl pt-1  h-6  pr-2' />
                          <p className="text-gray-300">Prev</p>
                        </div>



                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default CreateAccountPageTwo;
