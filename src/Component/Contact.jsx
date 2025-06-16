import React from 'react'
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error('All fields are required', {
        style: {

          backgroundColor: '#001f3f',
          color: '#fff',
        }
      });
      return;
    }

    emailjs
      .sendForm('service_od2s5d4', 'template_sk8ux04', form.current, {
        publicKey: 'zsrteF1I6re2wN7JJ',
      })
      .then(
        () => {
          toast.success('Message Sent Suceesfully!', {
            style: {

              backgroundColor: '#001f3f',
              color: '#fff',
            }
          });
        },
        () => {
          toast.error('Message Sent Unsucessfull!', {
            style: {

              backgroundColor: '#001f3f',
              color: '#fff',
            }
          });
        },
      );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5  xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={
            { type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }
          }
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg xs:w-[93vw]'>
          <Navbar />
          <div
            className=' p-5 xs:p-1 ' >
            <div


              className='m-3 '>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>contact </h2>
              <div className='w-20 h-1 bg-customWhite'></div>
            </div>
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={
                { type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }
              }
              className=' p-2 m-3 rounded-lg sm:w-full md:w-full lg:block '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.708608085663!2d72.83671477712633!3d19.0564478065702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
      1!3m3!1m2!1s0x3be7c922e6306673%3A0xff2aefea1543164b!2sBairam%20Naupada%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra%20400051!5e1!3m2!1sen!2sin!4v1718181851084!5m2!1sen!2sin" width="825" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='sm:w-full lg:block md:block lg:w-full xs:w-full rounded-lg' title="Contact Form"></iframe>
            </motion.div>
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={
                { type: 'tween', duration: 0.6, delay: 0.4, ease: 'easeOut' }
              }
              className='m-3 p-2 flex items-center  justify-center flex-col flex-wrap gap-3 rounded-lg '>
              <h1 className='text-customWhite text-3xl capitalize '>contact me</h1>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col  p-4 w-[40vw]  xs:w-full items-center justify-center '>
                <input className='p-2 rounded-lg lg:w-[25vw] mb-4 sm:w-full xs:w-[80vw] outline-none placeholder:text-darkGray ' type="text" name="user_name" placeholder='Full Name' onChange={handleChange} />
                <input type="email" name="user_email" className='p-2 rounded-lg lg:w-[25vw] mb-4 outline-none placeholder:text-darkGray  xs:w-[80vw] sm:w-full' placeholder='Email Address' onChange={handleChange} />
                <textarea className='p-2 rounded-lg lg:w-[25vw] mb-4  sm:w-full xs:w-[82vw] outline-none placeholder:text-darkGray' name="message" placeholder='Message' onChange={handleChange} />
                <input type="submit" value="Send Message" className='p-2 border bg-customWhite text-darkGray lg:text-xl rounded-lg w-[15vw] mt-4 sm:text-sm outline-none xs:w-[39vw]' />
              </form>

            </motion.div>
          </div>
        </motion.div>
      </div>
     <BottomNavbar/>
    </div>
  )
}

export default Contact
