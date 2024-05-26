import classNames from 'classnames'
import React from 'react'

const Button = ({ type, htmlType, children, className, onClick, ...props }) => {
    switch (type) {
        case "yellow": {
            return <button type={htmlType} className={classNames(className, "px-2.5 py-3 bg-[#ffc701] text-[#1b2235] text-sm rounded-sm")} onClick={onClick} {...props}>
                {children}
            </button>
        }
        default: {
            return <button type={htmlType} className={classNames(className, "px-2.5 py-3 bg-transparent text-[#8c98a9] text-sm rounded-sm")} onClick={onClick} {...props}>
                {children}
            </button>
        }
    }
}

export default Button