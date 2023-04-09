import React from 'react'

const HomeListImage = ({ url, alt, slug }) => {
  return (
    <img className='home-list-image'
      id={slug}
      src={url}
      alt={alt}
    />
  )
}

export default HomeListImage