import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return (
        <div className='bg-gray-800 mt-4  md:w-4/5 m-auto rounded  '>
            <div className='md:grid grid-cols-2 mt-2 mb-4  '>
              
                
                <div className='ml-10 mt-2 w-4/5'>
                    <p>Abu Sayed ( AS SABBIR )</p>
                    <p>Email:abusayedstudent855@gmail.com</p>
                    <p>Phone:+880 (1843425697)</p>
                </div>
                <div className='ml-10 mt-2'>
                {/* <button className='bg-gray-600 p-1 rounded  hover:bg-gray-700'> <FontAwesomeIcon icon={faPhone} className='mr-2'></FontAwesomeIcon> CONTACT </button> */}
                    <div className=' mt-2 flex '  >
                    <h1 className=' text-3xl hover:text-blue-600 ' ><a href="https://www.facebook.com/profile.php?id=100074503997052" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='icon ' icon= {faFacebookF}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6 text-3xl hover:text-blue-600 '><a href="https://github.com/abusayeds" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faGithub}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6 text-3xl hover:text-blue-600 '><a href="https://www.linkedin.com/in/abu-sayed96/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className=' icon' icon= {faLinkedinIn}  ></FontAwesomeIcon></a></h1>
                    <h1 className='ml-6 text-3xl hover:text-blue-600 '> <FontAwesomeIcon className='icon' icon= {faWhatsapp} /> </h1>
                </div>
                </div>
            </div>
            <p className='text-center mt-5'>Create by <FontAwesomeIcon className='text-yellow-500' icon={faHeart}> </FontAwesomeIcon> AS Sabbir</p>
        </div>
    );
};

export default Footer;