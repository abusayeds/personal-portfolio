import React from 'react';
import './About.css'
import img from '../../image/diploma.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
      <main>
            {/* -----------education -----------*/}
          <div className=' bg-gray-800 mt-3 rounded md:flex md:h-2/5    '>
            <div className='p-2 zoom'>
              <img className='rounded h-28 ml-10   ' src={img} alt="" srcset="" />
            </div>
            <div className='ml-10 md:w-2/4  '>
            <p className='pt-2 font-bold'>Education:</p>
            <li className='p-1'>I successfully completed all the academic requirements for my computer depertment in ( April, 2024 ), and I am now eager to receive my diploma.   ( Thakurgaon Polytechnic Institute )</li>
          
            </div>
            <div className='mt-2'>
              <a href="https://www.google.com/maps/d/viewer?mid=1p_doNmIX8WyuCuqHKPivUiXDDsw&hl=en_US&ll=26.038912000000007%2C88.44245200000002&z=17" target="_blank" rel="noopener noreferrer" className='pl-20  pb-2 '> locaton  <FontAwesomeIcon icon={faLocationDot} className='text-gray-400 '></FontAwesomeIcon></a>
            </div>
          </div>
          {/* -----------education -----------*/}

           {/* ----------skills-------- */}

           <div className='bg-gray-800 rounded mt-4'>
        <p className=' text-center pt-2 font-bold'>Skills</p>
        <div className='md:grid grid-cols-4 p-3  '>
               
               <div className=' zoom bg-gray-700 rounded m-3'>
               <p className='text-xl font-bold ml-2 '>Font-end </p>
                
               <div className='ml-10 mt-2'>
                <li>Html ,Css</li>
                <li>Java Script</li>
                <li>Next js</li>
                <li>React js</li>
                </div>

               </div>

               <div className=' zoom rounded m-3 bg-gray-700  '>
                <p className='text-xl font-bold ml-2 '>UI Framework </p>
                
                <div className='ml-10 mt-2'>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
                <li>Daisyui</li>
                
                </div>
               </div>

               <div className=' zoom rounded m-3 bg-gray-700 '>
               <p className='text-xl font-bold ml-2 '> Dev tools</p>
                
               <div className='ml-10 mt-2'>
                <li>Firebase</li>
                <li>Github</li>
                <li>npm (Package)</li>
               
                </div>
              </div>

               <div className=' zoom rounded m-3 bg-gray-700   '>
               <p className='text-xl font-bold ml-2 '>Backend</p>
                
                 <div className='ml-10 mt-2'>
                <li>Node js</li>
                <li>Express js </li>
                <li>mongo DB</li>
             
                </div>
              </div> 
         </div>
        </div>
           {/* ----------skills-------- */}


           <div className='bg-gray-800 rounded mt-4 p-4' >
              <p className='font-bold'>Certificate</p>
             <div className='bg-gray-700 p-2 rounded mt-2' >
              <p>Diploma completed ( From Thakurgaon Polytechnic Institute  )  </p>
              <p>Computer science & Technology pass: 2023</p>
             
             </div>
             <div className='bg-gray-700 mt-2 p-2 rounded' >
              <p>Complete Web Development Course with Programming Hero.</p>
              <p>Date: ( jun 25, 2021)</p>
             </div>
           </div>
          
      </main>
    );
};

export default About;