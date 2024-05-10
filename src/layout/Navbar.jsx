import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/navbar-logo.png'
import { MainIconSvg } from "./../components/main"

const Navbar = () => {
  return (
     <nav className='bg-[#131620] w-[88px]'>
        <Link to={'/'} className='py-5 block w-full'>
            <img src={Logo} className='w-11 mx-auto' alt="" />
        </Link>
 
        <ul className='space-y-3 py-4'>
            <li>
                <Link to={'/'} className='flex flex-col gap-2 items-center space-y-2 text-[#666e97] text-[14px]'>
                    <MainIconSvg />
                    <p className='uppercase'>main</p>
                </Link>
            </li>
        </ul>
     </nav>
  )
}

export default Navbar