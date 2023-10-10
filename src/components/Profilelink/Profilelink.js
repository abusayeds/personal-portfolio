import React from 'react';
import './Profilelink.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Profilelink = () => {
    return (
        <div className='link-container bg-gray-700 text-4xl text-center pt-20    '>
           <h1 className='' ><a href="https://www.facebook.com/profile.php?id=100074503997052" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='icon' icon= {faFacebookF}  ></FontAwesomeIcon></a></h1>
           <h1 className='mt-4'><a href="https://github.com/abusayeds" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faGithub}  ></FontAwesomeIcon></a></h1>
           <h1 className='mt-4'><a href="https://www.linkedin.com/in/abu-sayed96/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faLinkedinIn}  ></FontAwesomeIcon></a></h1>
           <h1 className='mt-4'> <FontAwesomeIcon className=' icon' icon= {faWhatsapp} /> </h1>

        </div>
    );
};

export default Profilelink;