`use client`;
import React from 'react'
import { BsLinkedin,BsTwitter ,BsInstagram,BsFacebook} from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between item-center'>
                <div className='hidden lg:flex gap:1'>
                   <div className='header_top_icon_wrapper'>
                      <BsFacebook />
                   </div>
                   <div className='header_top_icon_wrapper'>
                      <BsLinkedin />
                   </div>
                   <div className='header_top_icon_wrapper'>
                      <BsInstagram />
                   </div>
                   <div className='header_top_icon_wrapper'>
                      <BsTwitter />
                   </div>
                </div>
                <div className='text-gray-500 text-[12px]'>
                  <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - Rs 2000
                </div>
                <div className='flex gap-4'>
                 <select className='text-gray-500 text-[12px] w-[70px]' name='currency' id='currency'>
                  <option value='Rupees'>
                    Rupees
                  </option>
                  <option value='USD-$'>
                   USD-$
                   </option>
                 </select>
                 <select className='text-gray-500 text-[12px] w-[80px]' name='language' id='language'>
                  <option value='English'>
                    English
                  </option>
                  <option value='Uudu'>
                   Urdu
                   </option>
                 </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
