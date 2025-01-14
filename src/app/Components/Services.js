import React from 'react';
import s1 from './assets/s1.png'
import Image from 'next/image'
import s2 from './assets/s2.png'
import s3 from './assets/s3.png'
const Services = () => {
  return (
    <>
     <div className='heading'>
      <span>WHAT WE SERVE</span>
      <span>Your favourite food</span>
      <span>Delivery Patners</span>
    </div>
    <div className='services'>
      <div className='feature'>
        <div className='ImageWrapper'>
        <Image src={s1} alt='' objectFit='cover' layout='intrinsic'  />
        </div>
      <span>Easy to Order</span>
      <span>You only need a few steps in food odering</span>
      </div>
      <div className='feature'>
      <div className='ImageWrapper'>
        <Image src={s2} alt='' objectFit='cover' layout='intrinsic'  />
      </div>
      <span>Easy to Order</span>
      <span>delivering that is always on time even faster</span>
      </div>
      <div className='feature'>
      <div className='ImageWrapper'>
        <Image src={s3} alt='' objectFit='cover' layout='intrinsic'  />
      </div>
      <span>Easy to Order</span>
      <span>Not only fast for us, quality is also number one</span>
      </div>
    </div>
    </>  
  )
}

export default Services
