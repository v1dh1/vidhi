import React from 'react'
import CircularGallery from '../components/CircularGallery';


const Gallery = () => {
  return (
    <div>

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.01}/>
</div>

    </div>
  )
}

export default Gallery