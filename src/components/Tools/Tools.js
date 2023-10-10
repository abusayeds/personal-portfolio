import React, { useState } from 'react';
import { useEffect } from 'react';
import './tools.css'

const Tools = () => {

    const [logos ,setlogos] =useState([])
    useEffect( () => {
        fetch('Tools.json')
        .then(res => res.json())
        .then (data =>setlogos(data))
    },[])
    // console.log(logos)
    return (
        <div className='bg-gray-800 rounded mt-4 '>
            <p className='text-center pt-2 font-bold'>Expertise tools</p>
            <div className='  rounded  tools  items-center grid grid-cols-4 p-4'>
          
          {
              logos.map(logo => <div  key={logo.id} className='bg-gray-700 rounded zoom h-28 m-2  ' >
               <div className='flex justify-center '>
               <img className=' md:w-20 w:10 h-20 mt-2 rounded' src={logo.picture} alt="" />
               </div>
                <h1 className='text-center font-bold'>{logo.name}</h1>
              </div> )
          }
      </div>
        </div>
    );
};

export default Tools;