import React from 'react'
import { IoClose } from "react-icons/io5";

const Modal = ({ setIsOpen, children }) => {
    return (
        <div onClick={(e) => {
            if (e.target.dataset.modal) setIsOpen(false);
        }} data-modal className='z-10 fixed top-0 left-0 right-0 bottom-0 min-h-screen flex flex-col justify-center items-center'>
            {children}
        </div>
    )
}

export const ModalContent = ({ className, children, setIsOpen, title, ...props }) => {
    return (
        <div className='bg-[#161b2a] border-2 border=[#666E97] max-w-[800px] w-full p-8 relative h-[800px]' {...props}>
            <div className="flex justify-between pb-8">
                <h5 className='text-2xl text-white uppercase font-semibold'>
                {title}
                </h5>

                <button className='text-[#8C98A9] scale-150 outline-none text-base'>
                    <IoClose />
                </button>
            </div>
            
            {children}
        </div>
    )
}

export default Modal