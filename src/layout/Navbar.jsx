import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./../assets/logo.svg"
import { MainIconSvg } from '../icons/main'
import { JackIconSvg } from '../icons/jackpot'
import { CoinIconSvg } from '../icons/coinflip'
import { MinesIconSvg } from '../icons/mines'
import { PlinkoIconSvg } from '../icons/plinko'
import { WheelIconSvg } from '../icons/wheel'
import { UpgIconSvg } from '../icons/upgrader'

const Navbar = () => {
    return (
        <nav className='bg-[#131620] w-[88px]'>
            <Link to={"/"} className='py-5 block w-full' >
                <img src={Logo} className='w-11 mx-auto hover:w-12 ease-in-out duration-300' alt="Logo" />
            </Link>

            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <MainIconSvg className={"Nav-icon"} />

                        <p className='uppercase font-bold'>main</p>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <JackIconSvg className={"Jack-icon"} />

                        <p className='uppercase font-bold'>JackPot</p>
                        <div className=' h-auto bg-[#1C2033] px-5 py-1 flex justify-center items-center'>
                            <p className='text-center text-[#8C98A9]' >$ 0</p>
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <CoinIconSvg className={"Jack-icon"} />

                        <p className='uppercase font-bold'>Coinflip</p>
                        <div className=' h-auto bg-[#1C2033] px-3 py-1 flex justify-center items-center '>
                            <p className='text-center text-[#8C98A9]' >$ 4094</p>
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <MinesIconSvg className={"Mine-icon"} />

                        <p className='uppercase font-bold'>Mines</p>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <PlinkoIconSvg className={"Plinko-icon"} />

                        <p className='uppercase font-bold'>Plinko</p>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <WheelIconSvg className={"Wheel-icon"} />

                        <p className='uppercase font-bold'>Wheel</p>
                    </Link>
                </li>
            </ul>
            <ul className='space-y-3 py-4 '>
                <li className=''  >
                    <Link to={"/"} className='flex flex-col gap-2 items-center text-[#666e97] text-xs hover:text-[#FFC701] ease-in-out duration-300'>
                        <UpgIconSvg className={"Upg-icon"} />

                        <p className='uppercase font-bold'>Upgrader</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar