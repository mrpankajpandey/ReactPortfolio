import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } =useForm()
      const onSubmit = async (data) =>{
        const userInfo ={
          name:data.name,
          email:data.email,
          message:data.message,
        }
        try {
          await axios.post('https://getform.io/f/pagxzwrb', userInfo);
          toast.success(`Your Message Send Successfully ! ${userInfo.name} 👏`);
      

        } catch{
          toast.error(`There was an error. Please try again later.' ${userInfo.name} `);
       
        }
      }
  return (
    <>
    <hr />
    <div name="Contact" className='max-w-screen-2xl ontainer mx-auto px-4 md:px-20 my-10 '>
      <h2 className='text-3xl font-semibold mb-4 '>Contact Me</h2>
      <div className=''>
        <form method='POST' onSubmit={handleSubmit(onSubmit)}  className='flex w-full flex-col  items-center gap-5 border bottom-1 p-3 shadow-sm'>
            <h2 className='text-2xl font-normal'>Send me a Mesaage</h2>
            <h4 className="text-xl font-mono">I'am Very Responsive To Message </h4>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <input {...register("name", { required: true })} name='name' className='w-full h-[50px] rounded-full leading-tight border border-black py-2 px-4 dark:bg-[#1c1b23]' type="text" placeholder='Name'/>
                {errors.name && <span className='text-red-300 mx-4' >This field is required</span>}

            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <input {...register("email", { required: true })} name='email' className='w-full h-[50px] rounded-full border border-black py-2 px-4  dark:bg-[#1c1b23]' type="email" placeholder='Email' />
                {errors.email && <span className=' mx-4 text-red-300'>This field is required</span>}

            </div>
            <div className='w-full md:w-1/2 flex  flex-col gap-2'>
                <textarea {...register("message", { required: true })} name='message' className='w-full h-[140px] rounded-md border border-black py-2 px-4  dark:bg-[#1c1b23]'  type="text " placeholder='Enter Your Message'/>
                {errors.message && <span className='mx-4 text-red-300'>This field is required</span>}

            </div>
            <div className='w-1/2 flex items-center justify-center'>
                    <button type='submit' className='px-10 text-white font-medium py-3 bg-blue-400 outline-none hover:bg-blue-900 border  rounded-full' >Send</button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact