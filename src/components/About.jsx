import React from 'react'
import SectionTitle from './SectionTitle'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
function About() {
  const style = { color: "rgb(79 70 229)", fontSize: "50px"}
  return (
    <div className='flex flex-col md:flex items-center justify-center gap-10
    md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
        Hi, it's me again i'll tell you about my hobbies,
        My hobbies are various I am passionate about astronomy, I practice bodybuilding, I often listen to music and most importantly I love computers since my childhood,
        I understand English perfectly, right now I'm having fun making a bot on discord, my acquired languages are Html, Css, JS, Node.js, SQL, PHP, React etc... 
        Below this text you can find my contact information, 
thank you for reading.
        </p>
        <a href="mailto:rayane.sahraoui@epitech.eu"
        className='block mt-3 text-md md:text-lg
        font-regular text-gray-700 dark:text-gray-300
        underline hover:text-indigo-500 dark:hover:text-indigo-500'>rayane.sahraoui@epitech.eu</a>
        <div className='flex gap-5 relative top-5 right-0.5 '>
        <a href="https://www.linkedin.com/in/rayane-sahraoui-6b29a1237/">
        <FaLinkedin style={style}/></a>
        <a href="https://github.com/RayaneEpitech">
        <FaGithub  style={style}/></a>
        </div>
        </div>
       <img src={`src/data/Rayane.png`} alt="" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About