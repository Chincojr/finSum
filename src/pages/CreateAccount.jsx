import React, { useState } from 'react';
import FormField from '../component/FormField';
import Spinner from '../component/Spinner';
import logo from '../Assests/Frame 27.svg';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Bell } from 'lucide-react';
import avatar from '../Assests/Rectangle.svg'
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    expense: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Here is where the api will be called
      console.log(formData);
      return navigate('/completeSignUp');

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
              <Bell className="h-6 w-6" />
            </button>
            <img
              src={avatar}
              alt="User Avatar"
              className="h-10 w-10 rounded-full object-cover border border-gray-300" />
          </div>
        </nav>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
          <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              Create Your Financial Persona...
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 border">
              {/* Step Progress */}
              <div className=" w-full inline-flex items-center mb-6 space-x-4 justify-center">
                <div className="w-full text-4x1 text-indigo-600 rounded font-medium border-b-4 border-indigo-600 pb-1">
                  Step 1
                </div>
                <div className=" w-full text-4x1 text-gray-400 rounded border-b-4 border-gray-300 pb-1">
                  Step 2
                </div>
              </div>

              {loading ? (
                <Spinner loading={loading} />
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <FormField
                      name="name"
                      title="What’s your name?"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormField
                      name="age"
                      title="Your age"
                      type="text"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    <FormField
                      name="income"
                      title="Monthly Income"
                      type="text"
                      value={formData.income}
                      onChange={handleChange}
                    />
                    <FormField
                      name="expense"
                      title="Monthly Expense"
                      type="text"
                      value={formData.expense}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="flex flex-row justify-end mt-6">
                    <button
                      type="submit"
                      className="flex text-white  font-medium px-6 py-2  justify-center"
                    >
                      <div className='flex flex-row '>
                        <FaAngleDoubleRight className='text-gray-300 text-3xl pt-1  h-6  pr-2' />
                        <p className="text-gray-300">Next</p>
                      </div>
                    </button>

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

export default CreateAccount;
