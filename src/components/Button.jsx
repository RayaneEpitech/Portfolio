import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';

export const Button = () => {
  const form = useRef();
  // const textInput = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    // const textInput = useRef(null);
    // console.log(form.current[2].value)
      if(form.current[0].value === ''){
        alert('Veuillez remplir le champ "nom"')
        return;
        
      }else if(form.current[1].value === ''){
          alert('email')
        return;
      }else if(form.current[2].value === ''){
        alert('message')
        return;
      }else {
        alert('Votre message a été envoyer')
        
      }
     
    
   

    emailjs.sendForm('service_50pc0i8', 'template_urxe2d8', form.current, 'qs07_eBS8GHraVju0')
      .then((result) => {
          console.log(result.text);
          setInterval(window.location.reload(), 2000)
      }, (error) => {
          console.log(error.text);
      });
  };
  
 

  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto relative bottom-8">
    <div className="p-6 border border-gray-300  dark:border-gray-600 sm:rounded-md  dark:bg-gray-800">
    <SectionTitle>Contact Me</SectionTitle>
    <form className='' href='#' id='myform' ref={form} onSubmit={sendEmail}>
        <label className="block mb-6">
          <span className="text-gray-300">Your name</span>
          <input
            name="user_name"
            type="text"
            className="
              block
              w-full
              mt-1
              border-gray-600
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              bg-transparent
              placeholder-gray-600
              text-gray-300
            "
            placeholder="John doe"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-300">Email address</span>
          <input
            name="user_email"
            type="email"
            className="
              block
              w-full
              mt-1
              border-gray-600
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              bg-transparent
              placeholder-gray-600
              text-gray-300
            "
            placeholder="rayane.blabla@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-300">Message</span>
          <textarea
            name="message"
            className="
              block
              w-full
              mt-1
              border-gray-600
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              bg-transparent
              placeholder-gray-600
              text-gray-300
            "
            rows="3"
            placeholder="Tell me what you're thinking about..."
          ></textarea>
        </label>
        <div className="mb-6">
          <button
          
                  type="submit" 
                  value="Send"
            className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
          >
            Send
          </button>
        </div>
        
      </form>
    </div>
  </div>
  );
};
export default Button