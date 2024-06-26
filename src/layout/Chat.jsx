import React, { Fragment } from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";

const Chat = () => {
    const chatItem = [...Array(8)].map((_, index) => {
        return <Fragment key={index}>
            <li className='flex gap-3.5'>
                <div className="w-8 h-8 pl-2">
                    <div className="rounded-2xl w-7 h-7 before:content-[''] relative before:absolute before:block before:w-8 before:h-8 before:border before:border-red-200 before:rounded-2xl before:overflow-hidden before:-top-2 before:-right-2 before:-left-2 before:-bottom-2">
                        <div className="w-6 h-6 overflow-hidden rounded-2xl">
                            <img src="" className='block object-cover object-left-top w-full h-auto' alt="error" />
                        </div>
                    </div>
                </div>

                <div className='flex-grow'>
                    <div className="flex gap-x-2.5 items-center">
                        <span>Level icon</span>
                        <p className='text-[#475A76] text-sm'>NotTerry</p>
                    </div>

                    <p className='text-sm text-[#F3EBFB]'>
                        Did you click off of the pop up? If you did it'll auto sell it for you with +5% and you'll receive the balance automatically.
                    </p>
                </div>
            </li>
        </Fragment>
    })
    return (
        <div className='px-6 pt-11 bg-[#131620]'>
            <div className="flex items-center justify-between pb-5">
                <h3 className='text-xl font-semibold uppercase'>live chat</h3>

                <p
                    className='relative before:content-[""] before:w-2 before:h-2 before:rounded-2xl text-[#FFC701] before:block before:bg-[#FFC701] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4'>
                    35 online
                </p>
            </div>

            <ul className='py-3 space-y-4 h-[742px] overflow-x-hidden'>
                {chatItem}
            </ul>

            <form action="" className="py-5 px-6 bg-[#161b2a] -mx-6">
                <div className="grid grid-cols-3 gap-1 mb-2">
                    <button type='button' className='inline-flex items-center w-full outline-0 bg-[#22273e] rounded'>
                        <span className='w-3.5 overflow-hidden'>
                            FLAG
                        </span>
                        <span className='text-white text-xs flex-grow'>
                            EN room
                        </span>
                    </button>

                    <button type='button' className='inline-flex items-center w-full outline-0 bg-[#22273e] rounded'>
                        <span className='w-3.5 overflow-hidden'>
                            FLAG
                        </span>
                        <span className='text-white text-xs flex-grow'>
                            EN room
                        </span>
                    </button>

                    <button type='button' className='inline-flex items-center w-full outline-0 bg-[#22273e] rounded'>
                        <span className='w-3.5 overflow-hidden'>
                            FLAG
                        </span>
                        <span className='text-white text-xs flex-grow'>
                            EN room
                        </span>
                    </button>
                </div>

                <textarea className='inline-block w-full min-h-12 bg-[#22273e] rounded mb-3'></textarea>

                <p className='font-bold text-xs text-white flex gap-2 items-center'>
                    <span>Chat rules</span> <FaRegCircleQuestion />
                </p>
            </form>
        </div>
    )
}

export default Chat