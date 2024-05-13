import React from 'react'
import { BiShieldAlt2 } from "react-icons/bi"
import { HiOutlineUsers } from "react-icons/hi2"
import LogoText from "./../assets/logo-text.svg"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { FaRegStar } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import Image from '../components/Image'
import { Link } from "react-router-dom"
import { US } from 'country-flag-icons/react/3x2'
import { IoIosArrowBack } from "react-icons/io"
import DashboardStyle from './pages.module.css'
import classNames from 'classnames'
import Banner from '../assets/banner.jpg'
import Slider from 'react-slick'
import Plinko from '../assets/games/plinko.png'
import Wheel from '../assets/games/wheel.png'
import Mines from '../assets/games/mines.png'
import Jackpot from '../assets/games/jackpot.png'
import PvpMines from '../assets/games/pvpmines.png'
import Coinflip from '../assets/games/coinflip.png'
import Upgrader from '../assets/games/upgrader.png'
 
const Dashboard = () => {

    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear"
      }

    return (
        <section>
            <header className='bg-[#131620] py-6 px-8 flex items-center justify-between'>
                <Image className={classNames(DashboardStyle['Home__header-img'])} src={LogoText} srcSet={LogoText} />

                <div className='flex-grow text-center space-x-6'>
                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl transition-all'>
                        <BiShieldAlt2 className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl transition-all'>
                        <TfiHeadphoneAlt className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl transition-all'>
                        <HiOutlineUsers className='inline-block' />
                    </Link>

                    <Link to={"/"} className='text-[#4d5b97] hover:text-[#EC981A] text-xl transition-all'>
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

            <section>
                <Slider {...settings} className={classNames(DashboardStyle['Home__slider'], 'mx-auto pt-[34px]')}>
                    <div>
                        <Image src={Banner} srcSet={Banner} />
                    </div>
                    <div>
                        <Image src={Banner} srcSet={Banner} />
                    </div>
                    <div>
                        <Image src={Banner} srcSet={Banner} />
                    </div>
                </Slider>
            </section>

            <section className='px-[34px]'>
                <div className='grid grid-cols-4 gap-3 pt-9'>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Plinko} srcSet={Plinko} />
                    </Link>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Wheel} srcSet={Wheel} />
                    </Link>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Mines} srcSet={Mines} />
                    </Link>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Jackpot} srcSet={Jackpot} />
                    </Link>
                </div>

                <div className='grid grid-cols-3 gap-3 pt-3'>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={PvpMines} srcSet={PvpMines} />
                    </Link>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Coinflip} srcSet={Coinflip} />
                    </Link>
                    <Link to={'/'} className={classNames(DashboardStyle['Home__game-link'])} >
                        <Image src={Upgrader} srcSet={Upgrader} />
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Dashboard