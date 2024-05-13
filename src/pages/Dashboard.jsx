import React from 'react'
import { BiShieldAlt2 } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import LogoText from "./../assets/logo-text.svg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from '../components/Image';
import { Link } from "react-router-dom";
import { US } from 'country-flag-icons/react/3x2'
import { IoIosArrowBack } from "react-icons/io";

const Dashboard = () => {
    console.log(LogoText);
    return (
        <section>
            <header className='bg-[#131620] py-6 px-8 flex items-center justify-between'>
                <Image className={"w-40"} src={LogoText} srcSet={LogoText} />

                <div className='flex-grow text-center space-x-6'>
                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl'>
                        <BiShieldAlt2 className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl'>
                        <TfiHeadphoneAlt className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl'>
                        <HiOutlineUsers className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl'>
                        <FaRegStar className='inline-block' />
                    </Link>
                </div>

                <div className='flex items-center gap-2.5'>
                    <button type='button' className='inline-flex p-3 bg-[#20273d] items-center gap-2'>
                        <US className='w-6 h-6' />

                        <span className='uppercase text-white'>EN</span>

                        <IoIosArrowBack className='inline-block text-[#48488B]' />
                    </button>

                    <button type='button' className='p-2.5 bg-[#EC981A]'>
                        <FiMenu className='inline-block leading-none' />
                    </button>
                </div>
            </header>
        </section>
    )
}

export default Dashboard