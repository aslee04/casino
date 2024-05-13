import React from 'react'
import classNames from 'classnames'

const Image = ({ src, srcSet, title, type, className, imageClassName, ...props }) => {
    return (
        <picture className={classNames('block w-full h-auto', className)} {...props}>
            <source srcSet={srcSet} type={type} className='block w-full h-auto' {...props.source} />
            <img src={src} alt={title} className={classNames('block w-full h-auto', imageClassName)} {...props.image} />
        </picture>
    )
}

export default Image