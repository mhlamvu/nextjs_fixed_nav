import React from 'react'

const AnimatedImage = ({ url, alt }) => {
  return (
    <div className='animated-image'>
        <div className="placeholder" />
        <img src={url} alt={alt} className='media-image' />
    </div>
  )
}

export default AnimatedImage