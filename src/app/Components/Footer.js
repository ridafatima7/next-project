import React from 'react';
import Image from 'next/image';
import '../Components/Fudo.css';
import {UilFacebook,UilGithub,UilInstagram} from '@iconscout/react-unicons';
const Footer = () => {
  return (
    <div className='containerF'>
      <span>ALL RIGHTS RESERVED</span>
      <div className='social'>
      <UilFacebook size={45}/>
      <UilGithub size={45}/>
      <UilInstagram size={45} />
      </div>
      <div className='logo font-bold text-4x1 text-center pb-4 sm:pb-0 text-blackish '>
           <Image src='/Logo.png'   alt='' width={50}  height={50}/>
           <span>FUDO</span>
        </div>
    </div>
  )
}

export default Footer
