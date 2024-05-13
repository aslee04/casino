import React from 'react'
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

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