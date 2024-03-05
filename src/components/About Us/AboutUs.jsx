import React, { forwardRef, useState, useEffect } from 'react';
import about from '../../assets/aboutsUs.jpg';
import about2 from '../../assets/aboutsUs2.jpg';
import aboutAlt from '../../assets/aboutAlt.jpg'; 
import './AboutUs.css';


const AboutUs = forwardRef((props, ref) => {
  const [isFlipped, setIsFlipped] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(prevState => !prevState);
    }, 2000); // Flip every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <>
    
    <div className='AboutUS'>
    <h1 className="heading text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">About Us</h1>
    <div className='about-block' ref={ref}>
      
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="about-content w-full md:w-1/2">
            <div className="float-left mr-8 mb-4">
              <img src={about2} alt="Service Image" className="about2 rounded-md shadow-md" />
            </div>
            <p className="text-xl text-blue-600 leading-relaxed">
            Welcome to KK Industries, where precision meets purpose in fabrication and construction solutions. With expertise honed over many years, we're not just building structures; we're crafting communities. From intricate fabrication projects to the construction of essential labour camps, we're committed to excellence at every turn. Trust us to bring your vision to life with quality, efficiency, and a dedication to making a lasting impact. At KK Industries, we're not just building; we're shaping futures. Join us in building a better tomorrow, multiple projects at a time.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-auto" >
  <div className="about_image flex flex-wrap -mx-4">
    <div className="image_block md:w-full relative">
      {/* <img src={aboutAlt} alt="About Us Alternate" className="w-full rounded-lg shadow-lg md:block max-w-full h-auto" /> */}
    </div>
  </div>
</div>

              
            </div>
          </div>
        </div>
      
  


</div>
  </>
  
  );
});

export default AboutUs;
