import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-hot-toast';

const Register2 = ({ registerOpen, setRegisterOpen }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        department: '',
        year: '',
        sapId: '',
        division: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const requiredFields = ['fullName', 'department', 'year', 'sapId', 'division', 'email', 'phoneNumber'];
  
      for (const field of requiredFields) {
          if (!formData[field]) {
              return (
                toast.error(`Please enter your ${field === 'fullName' ? 'name' : field}!`, {
                  style: {
                    border: '1px solid #080F2B',
                    padding: '16px',
                    color: 'white',
                    background: '#080F2B'
                  },
                  iconTheme: {
                    primary: '#525C91',
                    secondary: '#9290C2',
                  },
                })
              )
          }
      }
  
      setTimeout(() => {
        toast.error(`Registration successfully ${formData.fullName}`, {
          style: {
            border: '1px solid #080F2B',
            padding: '16px',
            color: 'white',
            background: '#080F2B'
          },
          iconTheme: {
            primary: '#525C91',
            secondary: '#9290C2',
          },
        })
          handleRegisterChange();
      }, 2000);
  };
  

    const handleRegisterChange = () => setRegisterOpen(!registerOpen);

    return (
        <div className="flex z-[1000] flex-col items-center justify-center min-h-screen fixed inset-0 bg-opacity-90 backdrop-blur-sm">
            <div
                className='absolute top-2 left-[97%] cursor-pointer'
                onClick={handleRegisterChange}
            >
                <IoClose className="h-10 w-auto text-red-600 hover:text-red-800" />
            </div>
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4 font-bold text-center text-ESummitBlue-700">Plannered</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Department</label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="">Select department</option>
                        <option value="Comps">Comps</option>
                        <option value="IT">IT</option>
                        <option value="CS-DS">CS-DS</option>
                        <option value="AIDS">AI & DS</option>
                        <option value="AIML">AI & ML</option>
                        <option value="ICB">ICB</option>
                        <option value="EXTC">EXTC</option>
                        <option value="MECH">MECH</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Year of Study</label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                    >
                        <option value="">Select Year of Study</option>
                        <option value="FE">First Year</option>
                        <option value="SE">Second Year</option>
                        <option value="TE">Third Year</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sapId">SAP ID</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sapId"
                        type="number"
                        name="sapId"
                        value={formData.sapId}
                        onChange={handleChange}
                        placeholder="Enter your SAP ID"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="division">Division</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="division"
                        type="text"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        placeholder="Enter your division"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-ESummitBlue-700 hover:bg-ESummitBlue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register2;
