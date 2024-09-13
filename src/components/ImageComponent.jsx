import React from 'react'
import './style.css'
const ImageComponent = ({images,text,link}) => {
  return (
        <div style={{  textAlign: 'center', 
            maxWidth: '1000px',   // Set a maximum width for the container
            width: '100%',       // Make it responsive and fill up available space
            margin: '0 auto',     // Center the div horizontally
            position: 'relative' // Needed for absolute positioning of the h1
            }}> {/* Center-align content */}
         <a href={link} target="_blank" rel="noopener noreferrer">
        <img 
        src={images} 
        alt='Description of the image'
        className="zoomImage"
       
        />
        <h1 className="animatedText">{text}</h1>
        </a>
        </div>

        
  )
}

export default ImageComponent