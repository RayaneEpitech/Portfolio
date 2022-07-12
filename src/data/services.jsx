import { MdOutlineDescription, MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
export default [
    {
        title: 'My Skills',
        icon: <MdWeb className='w-full h-full'/>,
    description:'\n• Curiosity about technology\n • Adaptability\n • Organized\n • Love to acquire new skills on an ongoing basis \n• Autonomous',
       
    },
    {
        title: 'My Trainings',
        icon: <FaHandHoldingHeart className='w-full h-full'/>,
        description: '2021-2023: \nWeb@cadémie/Epitech \nMarseille\n \nSince 2015: \nBaccalaureate Pro level \nAntoine Saint-Exupéry High School \nSaint-Raphaël',
        
    },
    {
        title: 'My Professional experience',
        icon: <VscCode className='w-full h-full'/>,
        description: 'My professional computer experience started in 2013 when I started my internship at CleanOrdi where I learned how to build a computer, then in 2020 I got a passion for programming so I started to make a website selling rabbits to learn, but mostly to have fun! My other internships are listed in my resume (top of the page)',
        
    },
]