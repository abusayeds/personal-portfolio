import React from 'react';
import './Projects.css'
import news from '../../image/project-1.jpg'
import Quizs from '../../image/Quizs project.jpg'
import typer from '../../image/Speed typer.jpg'

const Projects = () => {
    return (
        <main>
             <div className='bg-gray-800 rounded mt-4 p-4  project items-center' >
              <div>
                <img className='h-32 rounded  zoom' src={news} alt="" srcset="" />
              </div>
              <div className='md:ml-10'>
                <p className='mt-2'> <small className='font-bold text-2xl'>Description </small>: News is information about current events. This may be provided through many different media.</p>
                <p> <small className='text-2xl '> Use tools</small>: Html , css , Java Script ,Tailwind</p>
                <div className='flex mt-2'>
                    <a href="https://github.com/abusayeds/Today-News" target="_blank" rel="noopener noreferrer"> <button className='bg-gray-600 button zoom '>Source</button></a>
                   
                    <a href="https://652132da47086d6249413de6--lively-tapioca-63bbba.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className='bg-gray-600 button ml-2 zoom '>Preview</button></a>
                    
                </div>
              </div>
              <div>

              </div>
             </div>

             <div className='bg-gray-800 rounded mt-4 p-4 project items-center' >
              <div>
                <img className='h-32 rounded  zoom' src={Quizs} alt="" srcset="" />
              </div>
              <div className='md:ml-10'>
                <p className='mt-2'> <small className='font-bold text-2xl'>Description </small>:Quiz, a contest in which participants test what they know by answering questions on one or more topics. The word 'quiz' itself appeared only </p>
                <p> <small className='text-2xl '> Use tools</small>:  Html , css , Java Script ,Tailwind , React js </p>
                <div className='flex mt-2'>
                    <a href="https://github.com/abusayeds/quiz" target="_blank" rel="noopener noreferrer"><button className='bg-gray-600 button zoom '>Source</button></a>
                    <a href="https://spiffy-tulumba-3a66c2.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='bg-gray-600 button ml-2 zoom '>Preview</button></a> 
                </div>
              </div>
              <div>

              </div>
             </div>

             <div className='bg-gray-800 rounded mt-4 p-4  project items-center' >
              <div>
                <img className='h-32 rounded  zoom' src={typer} alt="" srcset="" />
              </div>
              <div className='md:ml-10'>
                <p className='mt-2'> <small className='font-bold text-2xl'>Description </small>: Typing speed definition: the number of words someone can accurately type in one minute | Meaning, pronunciation, translations and examples.</p>
                <p> <small className='text-2xl '> Use tools</small>: Html , css , Java Script , Bootstrap</p>
                <div className='flex mt-2'>
                <a href="https://github.com/abusayeds" target="_blank" rel="noopener noreferrer"><button className='bg-gray-600 button  zoom '>Source</button></a> 
                <a href="https://extraordinary-liger-9822e6.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='bg-gray-600 button zoom ml-2 '>Preview</button></a>    
                    
                </div>
              </div>
              <div>

              </div>
             </div>
        </main>
    );
};

export default Projects;