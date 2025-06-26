import React from 'react';
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

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
          toast.success('Message Sent Successfully!', {
            style: {
              backgroundColor: '#001f3f',
              color: '#fff',
            }
          });
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        () => {
          toast.error('Message Sending Failed!', {
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
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg xs:w-[93vw]'
        >
          <Navbar />
          <div className='p-5 xs:p-1'>
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>Get In Touch</h2>
              <div className='w-20 h-1 bg-customWhite mb-4'></div>
              <p className='text-customWhite mb-6'>
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the form below or connect with me directly.
              </p>
            </div>

            {/* Contact Information Cards */}
            <motion.div 
              className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className='bg-white p-4 rounded-lg flex items-center gap-3'>
                <FaMapMarkerAlt className='  text-2xl' />
                <div>
                  <h3 className='text-black font-bold'>Location</h3>
                  <p className='text-black text-sm'>Mumbai, India</p>
                </div>
              </div>
              <div className='bg-white p-4 rounded-lg flex items-center gap-3'>
                <FaPhone className=' text-2xl' />
                <div>
                  <h3 className='text-black font-bold'>Phone</h3>
                  <p className='text-black text-sm'>+91 9321778441</p>
                </div>
              </div>
              <div className='bg-white p-4 rounded-lg flex items-center gap-3'>
                <FaEnvelope className=' text-2xl' />
                <div>
                  <h3 className='text-black font-bold'>Email</h3>
                  <p className='text-black text-sm'>shaikhsabina637@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className='p-2 m-3 rounded-lg border-white border-2'
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.708608085663!2d72.83671477712633!3d19.0564478065702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c922e6306673%3A0xff2aefea1543164b!2sBairam%20Naupada%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra%20400051!5e1!3m2!1sen!2sin!4v1718181851084!5m2!1sen!2sin" 
                width="825" 
                height="350" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className='sm:w-full lg:block md:block lg:w-full xs:w-full rounded-lg shadow-lg' 
                title="Contact Form"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className='m-3 p-2 flex items-center justify-center flex-col flex-wrap gap-3 rounded-lg border-white border-3'
            >
              <h1 className='text-customWhite text-3xl capitalize mb-6'>Send Me a Message</h1>
              <form 
                ref={form} 
                onSubmit={sendEmail} 
                className='flex flex-col p-6 bg-grey rounded-lg w-full max-w-lg'
              >
                <div className='mb-4 w-full'>
                  <label className='block text-customWhite mb-2'>Full Name</label>
                  <input 
                    className='p-3 rounded-lg w-full outline-none placeholder:text-gray-400 text-customWhite' 
                    type="text" 
                    name="user_name" 
                    placeholder='Your Name' 
                    value={formData.user_name}
                    onChange={handleChange} 
                  />
                </div>
                <div className='mb-4 w-full'>
                  <label className='block text-customWhite mb-2'>Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    className='p-3 rounded-lg w-full outline-none placeholder:text-gray-400  text-customWhite' 
                    placeholder='your.email@example.com' 
                    value={formData.user_email}
                    onChange={handleChange} 
                  />
                </div>
                <div className='mb-6 w-full'>
                  <label className='block text-customWhite mb-2'>Your Message</label>
                  <textarea 
                    className='p-3 rounded-lg w-full h-32 outline-none placeholder:text-gray-400  text-customWhite' 
                    name="message" 
                    placeholder='How can I help you?' 
                    value={formData.message}
                    onChange={handleChange} 
                  />
                </div>
                <motion.button
                  type="submit"
                  className='p-3 bg-white text-black rounded-lg w-full flex items-center justify-center gap-2'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default Contact;