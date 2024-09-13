import React from 'react'
const ImageComponent = ({images,text,link}) => {
  return (
        <div style={{ textAlign: 'center' }}> {/* Center-align content */}
         <a href={link} target="_blank" rel="noopener noreferrer">
        <img 
        src={images} 
        alt='Description of the image'
        style={{ width: '100%', height: 'auto' }}  // Optional styles
        />
        <p>{text}</p>
        </a>
        </div>
  )
}

export default ImageComponent