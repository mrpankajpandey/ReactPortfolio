
import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form'
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import toast from 'react-hot-toast'

Modal.setAppElement('#root'); // Bind modal to your app's root element

const Login = ({ isOpen, onRequestClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm()
  
  const onSubmit = (e) =>{
    // e.preventDefault();
   
    toast.error(`Sorry, Admin! Invalid credentials`);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Popup"
      className="flex justify-center items-center inset-0 fixed bg-black bg-opacity-75"
      overlayClassName=""
    >
      <div className="relative bg-black rounded-lg p-8 shadow-lg max-w-md w-full">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
          onClick={onRequestClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">ADMIN LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700">What's your e-mail?</label>
            <input
            {...register("email",  { required: true }, )}
              type="email"
              name="email"
              placeholder="E-mail"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
            />
             {errors.email && <span className='text-red-300 mx-4' >This field is required</span>}
          </div>
          <div>
            <label className="block text-gray-700">Your password?</label>
            <input
            {...register("password",  { required: true }, )}
              type="password"
              name="password"
              placeholder="Password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
            />
             {errors.password && <span className='text-red-300 mx-4' >This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
