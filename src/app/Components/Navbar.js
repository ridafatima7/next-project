import React from 'react';
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
        <Link className='navbar_link relative' href='#'>
            HOME
        </Link>
        <Link className='navbar_link relative' href='#'>
            CATEGORIES
        </Link>
        <Link className='navbar_link relative' href='#'>
            MEN
        </Link>
        <Link className='navbar_link relative' href='#'>
            WOMEN
        </Link>
        <Link className='navbar_link relative' href='#'>
            KIDS
        </Link>
      </div>
    </div>
  )
}

export default Navbar
