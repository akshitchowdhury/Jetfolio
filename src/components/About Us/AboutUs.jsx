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
    <h1 data-text = "About Us" className="aboutHead">About Us</h1>
    <div className='about-block' ref={ref}>
      
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="about-content w-full md:w-1/2">
            <div className="float-left mr-8 mb-4">
              <img src={about2} alt="Service Image" className="about2 rounded-md shadow-md" />
            </div>
            <p className="text-lg text-blue-600 leading-relaxed">
           Greetings, web-heads! Welcome to my corner of the web, where every pixel tells a story of heroism, humor, and heart. I'm Miles Morales, your friendly neighborhood Spider-Man, swinging through the digital skyline and fighting the good fight against villains both online and off.

Born and raised in the bustling boroughs of New York City, I've learned a thing or two about power, responsibility, and the occasional rooftop showdown.When I'm not busy thwarting the latest cyber threat, you can find me tinkering with gadgets in my makeshift lab or chilling with my crew in the coolest spots this side of the city.

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
