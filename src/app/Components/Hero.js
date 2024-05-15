import React from 'react';
import Image from 'next/image'
import './Fudo.css';
import heroImg from '../Components/assets/HeroImage.png'
import {UilPhone} from  '@iconscout/react-unicons'
import cherry from '../Components/assets/Cherry.png';
import pizza from '../Components/assets/p1.jpg';

const Hero = () => {
    return (
        <div className='heroContainer'>
            <div className='left'>
                <div className='cherryDiv'>
                    <span>More than Faster</span>
                    <Image src={cherry} alt='' width={40} height={25} />
                </div>
                <div className='heroText'>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>Your <span style={{ color: 'var(--themeRed)' }}>Pizza</span></span>
                </div>
                <div className='miniText'>
                  Our Mission is to filling your tummy with delicious food and with
                  and free delivery
                </div>
                <button className='btn started'>
                   Get Started
                </button>
            </div>
            <div className='right'>
                 <div className='imageContainer'>
                    <Image  src={heroImg}  width={100} height={100} style={{width:'40rem',height:'42rem'}}/>
                 </div>
                 <div className='ContactUs'>
                    <span>Contact Us</span>
                    <div>
                    <UilPhone />
                    </div>
                 </div>
                 <div className='pizza'>
                    <div>
                        <Image src={pizza} alt='' objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className='details'>
                      <span>Italian Pizza</span>
                      <span><span style={{color:'var(--themeRed'}}>Rs</span> 4000</span>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Hero
