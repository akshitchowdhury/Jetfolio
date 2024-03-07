import React, { forwardRef } from 'react'
import v1 from '../../assets/gallery/V1.mp4'
import v2 from '../../assets/gallery/V2.mp4'
import v3 from '../../assets/gallery/V3.mp4'

import Card from './Card/Card'
import './Gallery.css'
// import Video from './Video/Video'

const urls = [
  v1,
  v2,v3
];

const Gallery = forwardRef((props,ref) => {
  return (
    <div className='main-gallery container mx-auto mt-20' ref={ref}>
  <h1 data-text = "About Me" className="glitch"><span aria-hidden="true">My Gallery</span>
    My Gallery
    <span aria-hidden="true">My Gallery</span></h1>
  <br />
  <div className='flex flex-wrap justify-center'>
    <Card/>
  </div>

  {/* <div className='video'>
    <Video urls={urls} />
  </div> */}
</div>

    
  )
})

export default Gallery