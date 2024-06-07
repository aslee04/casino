import React, { useState } from 'react'
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
import DashboardStyle from "./pages.module.css";
import classNames from 'classnames';
import BannerImage from "./../assets/banner.jpg";
import Slider from 'react-slick';
import PlinkoImage from "../assets/games/plinko.png"
import WheelImage from "../assets/games/wheel.png"
import MinesImage from "../assets/games/mines.png"
import JackpotImage from "../assets/games/jackpot.png";
// 
import PvpMines from "../assets/games/pvp.png";
import Coinflip from "../assets/games/coinflip.png";
import Upgrader from "../assets/games/upgrader.png";
import Button from '../components/Button';
import { LuTimer } from "react-icons/lu";

const Dashboard = () => {

    const [Timer, setTimer] = useState("00:00:00");

    setInterval(() => {
        const date = new Date();

        setTimer(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }, 1000)

    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    }

    return (
        <section>
            

            <section className="">
                <Slider {...settings} className={classNames(DashboardStyle["Home__slider"], "mx-auto")}>
                    <div>
                        <Image src={BannerImage} srcSet={BannerImage} />
                    </div>

                    <div>
                        <Image src={BannerImage} srcSet={BannerImage} />
                    </div>

                    <div>
                        <Image src={BannerImage} srcSet={BannerImage} />
                    </div>
                </Slider>
            </section>

            <section className='px-8'>
                <div className="grid grid-cols-4 gap-3">
                    <Link to={"/"} className={classNames(DashboardStyle["Home__game-link"])}>
                        <Image src={PlinkoImage} srcSet={PlinkoImage} />
                    </Link>

                    <Link to={"/"} className={classNames(DashboardStyle["Home__game-link"])}>
                        <Image src={WheelImage} srcSet={WheelImage} />
                    </Link>

                    <Link to={"/"} className={classNames(DashboardStyle["Home__game-link"])}>
                        <Image src={MinesImage} srcSet={MinesImage} />
                    </Link>

                    <Link to={"/"} className={classNames(DashboardStyle["Home__game-link"])}>
                        <Image src={JackpotImage} srcSet={JackpotImage} />
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <Link to={"/"}>
                        <Image src={PlinkoImage} srcSet={PlinkoImage} />
                    </Link>

                    <Link to={"/"}>
                        <Image src={PlinkoImage} srcSet={PlinkoImage} />
                    </Link>

                    <Link to={"/"}>
                        <Image src={PlinkoImage} srcSet={PlinkoImage} />
                    </Link>
                </div>
            </section>

            <footer className='px-9 pt-24 relative'>
                <div className="text-center">
                    <div className='flex justify-center gap-x-10 items-center'>
                        <span className='h-0.5 bg-gradient-to-r from-[#272F48] to-[#434B71] flex-grow'></span>
                        <h2 className='text-[40px] uppercase text-[#FFC701]'>
                            Leaderboard
                        </h2>
                        <span className='h-0.5 bg-gradient-to-r from-[#434B71] to-[#272F48] flex-grow'></span>
                    </div>

                    <div className="space-x-3">
                        <Button type={"yellow"}>Daily</Button>
                        <Button>Weekly</Button>
                    </div>
                </div>

                <div className="absolute bottom-5 right-9">
                    <p className='text-end text-xs mb-1.5'>Ends in</p>
                    <time className='flex items-center'>
                        <span className='text-xl'>
                            <LuTimer />
                        </span>

                        <span>
                            {Timer}
                        </span>
                    </time>
                </div>
            </footer>
        </section>
    )
}

export default Dashboard