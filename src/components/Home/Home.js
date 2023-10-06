import React from 'react';
import './Home.css'
import img from '../../image/pik.5-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faComment, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faArrowCircleRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
      
          <main className=' md:p-20'>
          <div className='home-container md:grid grid-cols-2 items-center'>
            <div className=' '>

                  <div className='p-3'>
                  <h1 className='text-5xl font-bold text-blue-700'>I m, Sabbir  </h1>
                  <h2 className='text-3xl mt-10'>Web devloper</h2>
                  <h3 className='text-xl mt-2'>Welcome to my portfolio! I'm a passionate front-end developer with a keen eye for design and a love for creating user-friendly web experiences. Here, you'll find a showcase of my work, demonstrating my skills and expertise in web development.</h3>
                  <button className='bg-blue-700 hover:bg-blue-500 rounded p-2 mt-4 text-white '>  CV download <FontAwesomeIcon className='text-xl' icon={faArrowCircleRight}></FontAwesomeIcon></button>
                  </div>

                  <div className='home-link-container flex p-3'  >
                    <h1 className='' ><a href="https://www.facebook.com/profile.php?id=100074503997052" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='icon ' icon= {faFacebookF}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6'><a href="https://github.com/abusayeds" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faGithub}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6'><a href="https://www.linkedin.com/in/abu-sayed96/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faLinkedinIn}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6'> <FontAwesomeIcon className='icon' icon= {faWhatsapp} /> </h1>
                 </div>

            </div>

            <div className='items-center'>
              <img className='rounded img bg-slate-200 hover:bg-slate-400 md:ml-20 ml-5 ' src={img} alt="" />
            </div>
           </div>

           
            <h1 className='text-center md:text-5xl text-3xl font-bold m-20'>Get In <small className=' text-blue-700'>Touch</small></h1>
           
       
            <div className=' md:grid grid-cols-2 gap-5 '>
                <div className='rounded bg-slate-100'>
                  <div className=''>
                     <h1 className='text-3xl font-bold p-3'>My self</h1>
                    <h1 className='mt-4 p-3 text-xl'>Lorem ipsum dolor sit amet.loem8em ipsum dolor sit amet.loem8em ipsum dolor sit amet.loem8em ipsum dolor sit amet.loem8</h1>
                  </div>
                <div>
                    <div className='flex items-center'>  
                 
                    <h1 className='ml-2 text-xl'> </h1>
                    </div>
                    <div className='mt-2 text-xl flex p-3 '>
                    <h1><FontAwesomeIcon className='text-blue-700 bg-white' icon={faPhoneVolume}></FontAwesomeIcon></h1>
                    <h1 className='ml-2 '>Call me: 01843425697</h1>
                    </div>
                </div>
                </div>
                <div className='rounded bg-slate-100 p-2 '>
                    <div className='p-2 text-blue-700'>
                        <p className='bg-blue-100 w-full p-3 rounded '>My email: abusayedstudent855@gmail.com</p>
                        <br />
                        <input className='bg-blue-100 w-full p-3  rounded ' type="text" placeholder='your  email' />
                        <br />
                        <input className='mt-2 bg-blue-100 w-full p-3 rounded' type="text" placeholder='subject'/>
                        <br />
                        <div>
                        <button className='md:mt-20 mt-10 bg-blue-700 text-white p-3 rounded hover:bg-blue-500 '>sent sms <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></button>
                       
                        </div>
                        <br />
                    </div>
                </div>
          
           </div>
           {/********************************  about section ****************************************8 */}
             <p className='text-center text-4xl p-20 font-bold'>About <small className='text-4xl text-blue-700'>Me</small> </p>
             <div className='md:grid grid-cols-4 gap-2 '>
               
                   <div className='border-solid border-1 border-blue-400 rounded m-3'>
                    <p className='text-6xl font-bold text-blue-700 ml-2'>6 <small>+</small></p>
                    <br />
                    <p className='text-center'>year of exprience in web devlopment</p>
                   </div>

                   <div className='border-solid border-1 border-blue-400 rounded m-3 '>
                    <p className='text-6xl font-bold text-blue-700  ml-2'>40 <small>+</small></p>
                    <br />
                    <p className='text-center'>completed projects</p>
                   </div>

                   <div className='border-solid border-1 border-blue-400 rounded m-3'>
                    <p className='text-6xl font-bold text-blue-700  ml-2'>1<small>+</small></p>
                    <br />
                    <p className='text-center'>year of exprience programing hero course  !</p>
                  </div>

                   <div className='border-solid border-1 border-blue-400 rounded m-3  '>
                    <p className='text-6xl font-bold text-blue-700  ml-2'>6<small>+</small></p>
                    <br />
                    <p className='text-center'>month of exprience software company</p>
                  </div>
             
                
             </div> 

           {/********************************  about section ****************************************8 */}
             
           </main>
      
        
    );
};

export default Home;