import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import {FiHeart} from 'react-icons/fi';
import {HiOutlineShoppingBag}  from 'react-icons/hi';
import Logo from './assets/Logo.png';
const Header = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container sm:flex justify-between item-center'>
        <div className='font-bold text-4x1 text-center pb-4 sm:pb-0 text-blackish '>
           <img src={Logo} alt='' />
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input type='text' className='border-gray-200 border  p-2  px-4  rounded-lg w-full' placeholder='Search Product....'>
          </input>
          <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20}/>
        </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
          <BiUser />
          <div className='relative'>
            <FiHeart />
            <div className='bg-red-600 rounded-full absolute right-0 top-0 w-[18px] h-[18px] text-[12px]
            text-white grid place-items-center translate-x-1 translate-y-1'>
            0
            </div>
          </div>
          <div className='relative'>
            <HiOutlineShoppingBag />
            <div className='bg-red-600 rounded-full absolute right-0 top-0 w-[18px] h-[18px] text-[12px]
            text-white grid place-items-center translate-x-1 translate-y-1'>
            0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
