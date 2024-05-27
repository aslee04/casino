import { US } from 'country-flag-icons/react/3x2'
import React, { Fragment, useState } from 'react'
import { BiShieldAlt2 } from 'react-icons/bi'
import { BsDiscord, BsTwitter } from "react-icons/bs"
import { FaRegStar } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineUsers } from 'react-icons/hi2'
import { IoIosArrowBack } from 'react-icons/io'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import LogoText from "../assets/logo-text.svg"
import Image from '../components/Image'
import Modal, { ModalContent } from '../components/Modal'
import DashboardStyle from "../pages/pages.module.css"
import Monet from "../assets/monet.png"
import BgImage from "../assets/BgImage.png"
import {TbCopy} from "react-icons/tb"
import {CopyToClipboard} from 'react-copy-to-clipboard'

export const SubHeader = () => {
    const [ActiveIcon, setActiveIcon] = useState(0)
    const handleActiveIcon = (id) => setActiveIcon(id)

    const [IsOpen, setIsOpen] = useState(false)
    const handleModal = () => {
        setIsOpen(prev => !prev)
        setActiveIcon(IsOpen ? ActiveIcon : 1)
    }
    const [CopyValue, setCopyValue] = useState('')
    const [Copied, setCopied] = useState(false)

    return <Fragment>
            {
                IsOpen && <Modal setIsOpen={setIsOpen}>
                    <ModalContent setIsOpen={setIsOpen} title={'Affiliates'}>
                        <div className='flex pt-6'>
                            <button type='button' className='pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400'>
                                Overview
                            </button>
                            <button type='button' className='pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400'>
                                Users
                            </button>
                            <button type='button' className='pt-1.5 pb-1.5 px-4 uppercase text-[#8c98a9] hover:bg-[#737999] hover:text-[#1b2235] rounded-sm transition ease-in-out duration-400'>
                                Tiers
                            </button>
                        </div>

                        <div className='flex flex-grow'>
                            <div className=''>
                                <h3 className='text-left pt-6 font-base text-[#8C98A9]'>
                                    Your affiliate code
                                </h3>
                                <input type="text" placeholder='Enter Code' className='border-none rounded p-2 bg-[#20273d] text-[#9ca3af] text-sm mt-1 w-[260px] h-[36px]' />
                            </div>

                            <div className='ml-8'>
                                <h3 className='text-left pt-6 font-base text-[#8C98A9]'>
                                    Your affiliate link
                                </h3>
                                <input type="url" value={'https://rustyloot.gg/r/undefined'} className='border-none rounded p-2 bg-[#20273d] text-[#9ca3af] text-sm mt-1 w-[407px] h-[36px]' />
                            </div>
                        </div>

                        <button type="button" className='block border-none rounded-sm w-[208px] h-[40px] rounded text-sm text-[#8c98a9] font-semibold bg-transparent uppercase hover:bg-[#ffc138] hover:text-[#161b2a] mt-4 transition-all duration-300'>
                            Create Code
                        </button>

                        <div className="grid grid-col gap-4 mt-4">
                            <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
                                <div className='flex gap-3 pt-[18px] pl-[16px]'>
                                    <img src={Monet} alt="Monet Image" />
                                    <p className='font-bold'>0</p>
                                </div>
                                <p className='text-center text-sm font-normal text-[#8c98a9] mt-2'>depositors</p>
                            </div>
                            <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
                                <div className='flex gap-3 pt-[18px] pl-[16px]'>
                                    <img src={Monet} alt="Monet Image" />
                                    <p className='font-bold'>0</p>
                                </div>
                                <p className='text-center text-sm font-normal text-[#8c98a9] mt-2'>depositors</p>
                            </div>
                            <div className="row-start-1 row-auto w-[233px] h-[80px] bg-[#22273e]">
                                <div className='flex gap-3 pt-[18px] pl-[16px]'>
                                    <img src={Monet} alt="Monet Image" />
                                    <p className='font-bold'>0</p>
                                </div>
                                <p className='text-center text-sm font-normal text-[#8c98a9] mt-2'>depositors</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-4 w-[732px] h-[344px] bg-[#222939]'>
                            <div className='pb-4'>
                                <div className='border-solid border-2 border-[#ffc701] w-[40px] h-[40px] bg-[#161b2a] rounded-full'></div>
                                <h3 className='font-bold text-sm'>Unknown</h3>
                                <p className='font-normal text-sm text-[#8c98a9] capitalize'>0.00% Progress to next tier</p>
                            </div>

                            <div className='w-[480px] h-[16px] bg-[#22273e] rounded-full pb-4'></div>

                            <div className='flex items-center'>
                                <div className='flex justify-between gap-3'>
                                    <img src={Monet} alt="" />
                                    <p>0</p>
                                </div>

                                <p className='text-[#8c98a9] text-xl mt-2'>Available earnings</p>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            }
            <header className='bg-[#131620] py-6 px-8 flex items-center justify-between'>
                <Image className={classNames(DashboardStyle["Home__header-img"])} src={LogoText} srcSet={LogoText} />

                <div className='flex-grow text-center space-x-6'>
                    <button className={`${ActiveIcon === 1 ? "text-[#EC981A]" : "text-[#4d5b97]"} hover:text-[#EC981A] text-xl border-none outline-none bg-transparent`} onClick={() => {handleActiveIcon(1), handleModal()}}>
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