import React from 'react'
import { IoCloseOutline } from "react-icons/io5"

const Modal = ({setIsOpen, children}) => {
  return (
    <div onClick={(e) => {if (e.target.dataset.modal) setIsOpen(false)}} data-modal className='fixed top-0 left-0 right-0 bottom-0 min-h-screen flex flex-col justify-center items-center z-10'>
        {children}    
    </div>
  )
}

export const ModalContent = ({className, children, setIsOpen, title, ...props}) => {
    return (
        <div className='bg-[#161b2a] border-2 border-[#666e97] max-w-[800px] w-full p-8 relative' {...props}>
            <div className='flex justify-between'>
                <h5 className='text-2xl text-white uppercase'>
                    {title}
                </h5> 
                <button onClick={() => setIsOpen(false)} className='border-none bg-transparent outline-none text-3xl'>
                    <IoCloseOutline className='w-7 h-7' />
                </button>
            </div>
            {children}
        </div> 
    )
}

export default Modal