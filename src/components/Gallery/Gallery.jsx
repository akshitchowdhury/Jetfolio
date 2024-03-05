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
  <h2 className="heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left mx-auto">Our Gallery</h2>

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