import React from 'react';
import './Home.css'
import img from '../../image/pik.5-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

import { faArrowCircleRight, faPhone, } from '@fortawesome/free-solid-svg-icons';
import Tools from '../Tools/Tools';




const Home = () => {
    return (
      <main>

        <div className='home-1 md:bg-gray-800 md:mt-5  md:p-5 rounded '>
           <div className='md:w-4/5 m-auto '>
            <p className='text-4xl mt-2 font-bold'>I m, Sabbir </p>
            <p className='text-2xl mt-3'> Web devloper</p>
             <p>Welcome to my portfolio! I'm a passionate front-end developer with a keen eye for design and a love for creating user-friendly web experiences. Here, you'll find a showcase of my work, demonstrating my skills and expertise in web development.</p>
              
            

            <div className='flex mt-3'>
            <button className='bg-gray-500 button  hover:bg-gray-700 zoom'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> CONTACT</button>
            <button className='bg-gray-500 md:ml-4 ml-2  button  hover:bg-gray-700 zoom'>RASUME<FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>
            </div>

            <div className=' mt-4 flex  '  >
            <h1 className=' text-3xl hover:text-blue-600 zoom ' ><a href="https://www.facebook.com/profile.php?id=100074503997052" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='icon ' icon= {faFacebookF}  ></FontAwesomeIcon></a></h1>
            <h1 className='ml-6 text-3xl hover:text-blue-600 zoom '><a href="https://github.com/abusayeds" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faGithub}  ></FontAwesomeIcon></a></h1>
            <h1 className='ml-6 text-3xl hover:text-blue-600 zoom '><a href="https://www.linkedin.com/in/abu-sayed96/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faLinkedinIn}  ></FontAwesomeIcon></a></h1>
            <h1 className='ml-6 text-3xl hover:text-blue-600 zoom '> <FontAwesomeIcon className='icon' icon= {faWhatsapp} /> </h1>
            </div>
           
           </div>
           <div className=' zoom md:ml-10 pl-2 bg-gray-700 mt-2 rounded '>
            <img className='mr-10' src={img} alt=""/>
           </div>
        </div>


        <div className='bg-gray-800 rounded mt-4'>
        <p className='text-center pt-2 font-bold'>Exprience</p>
        <div className='md:grid grid-cols-4 p-3  '>
               
               <div className=' zoom bg-gray-700 rounded m-3'>
                <p className='text-6xl font-bold ml-2'>6 <small>+</small></p>
                <br />
                <p className='text-center'>year of exprience in web devlopment</p>
               </div>

               <div className=' zoom rounded m-3 bg-gray-700  '>
                <p className='text-6xl font-bold ml-2'>40 <small>+</small></p>
                <br />
                <p className='text-center'>completed projects</p>
               </div>

               <div className=' zoom rounded m-3 bg-gray-700 '>
                <p className='text-6xl font-bold ml-2'>1<small>+</small></p>
                <br />
                <p className='text-center'>year of exprience programing hero course  !</p>
              </div>

               <div className=' zoom rounded m-3 bg-gray-700   '>
                <p className='text-6xl font-bold ml-2'>6<small>+</small></p>
                <br />
                <p className='text-center p-1'>month of exprience software company</p>
              </div> 
         </div>
        </div>

        <Tools></Tools>
        

      </main>
          
      
        
    );
};

export default Home;