import React, { Fragment, useState } from 'react'
import { BsDiscord } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import { BiShieldAlt2 } from 'react-icons/bi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { HiOutlineUsers } from 'react-icons/hi2'
import { FaRegStar } from 'react-icons/fa6'
import { US } from 'country-flag-icons/react/3x2'
import { IoIosArrowBack } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import classNames from 'classnames'
import DashboardStyle from "../pages/pages.module.css"
import LogoText from "../assets/logo-text.svg"

export const SubHeader = () => {
    const [ActiveIcon, setActiveIcon] = useState(0)
    const handleActiveIcon = (id) => setActiveIcon(id)

    return <Fragment>
            <header className='bg-[#131620] py-6 px-8 flex items-center justify-between'>
                <Image className={classNames(DashboardStyle["Home__header-img"])} src={LogoText} srcSet={LogoText} />

                <div className='flex-grow text-center space-x-6'>
                    <button className={`${ActiveIcon === 1 ? "text-[#EC981A]" : "text-[#4d5b97]"} hover:text-[#EC981A] text-xl border-none outline-none bg-transparent`} onClick={() => handleActiveIcon(1)}>
                        <BiShieldAlt2 className='inline-block' />
                    </button>

                    <button className={`${ActiveIcon === 2 ? "text-[#EC981A]" : "text-[#4d5b97]"} hover:text-[#EC981A] text-xl border-none outline-none bg-transparent`} onClick={() => handleActiveIcon(2)}>
                        <TfiHeadphoneAlt className='inline-block' />
                    </button>

                    <button className={`${ActiveIcon === 3 ? "text-[#EC981A]" : "text-[#4d5b97]"} hover:text-[#EC981A] text-xl border-none outline-none bg-transparent`} onClick={() => handleActiveIcon(3)}>
                        <HiOutlineUsers className='inline-block' />
                    </button>

                    <Link to={"/daily-cases"}className={`${ActiveIcon === 4 ? "text-[#EC981A]" : "text-[#4d5b97]"} hover:text-[#EC981A] text-xl`} onClick={() => handleActiveIcon(4)}>
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
    </Fragment>
}

const Header = () => {
    return (
        <nav className='py-1.5 px-6 flex gap-x-14 bg-[#131620] items-center'>
            <div className='flex gap-x-2 items-center'>
                <a href="#!" className='text-[#3B436B] text-sm hover:text-white'>
                    <BsDiscord />
                </a>

                <a href="#!" className='text-[#3B436B] text-sm hover:text-white'>
                    <BsTwitter />
                </a>
            </div>

            <div className='space-x-7'>
                <Link
                    to={"/"}
                    className='uppercase text-[#666e97] hover:text-[#ffc701] text-sm'
                >
                    LEADERBOARD
                </Link>

                <Link
                    to={"/"}
                    className='uppercase text-[#666e97] hover:text-[#ffc701] text-sm'
                >
                    FREE CASE
                </Link>

                <Link
                    to={"/"}
                    className='uppercase text-[#666e97] hover:text-[#ffc701] text-sm'
                >
                    RAKEBACK
                </Link>
            </div>
        </nav>
    )
}

export default Header