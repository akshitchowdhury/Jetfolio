import React, { forwardRef, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'leaflet/dist/leaflet.css';
import MapLeaflet from './MapLeaflet';
import './Contact.css'

const ContactComponent = forwardRef((props,ref) => {

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("iI4KONZqTCCU8bCTw");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_gr4bljk";
    const templateId = "template_tv63f2y";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value, // Include phone number in the email template
        email: emailRef.current.value // Include phone number in the email template
      });
      alert("Email successfully sent. Please check your inbox.\n\nName: " + nameRef.current.value + "\nEmail: " + emailRef.current.value + "\nMessage: " + messageRef.current.value + "\nPhone: " + phoneRef.current.value); // Display name, email, message, and phone number in the success message
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };





  return ( <>
  <div ref={ref} className='connect-container'>
  <h2 className="connect w-full lg:w-3/4 px-4 lg:p-4 lg:h-full rounded-lg  text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">Connect With Us</h2>

    <div className="flex flex-col lg:flex-row sm:flex-col">
    <div className="form w-full md:w-1/2 lg:w-1/2 px-4 lg:p-4 lg:h-full rounded-lg shadow-2xl bg-white">
  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block font-semibold mb-1">Name</label>
      <input type="text" ref={nameRef} id="name" name="name" className="enter-name w-full px-4 py-2 border rounded-md" placeholder="Enter your name" />
    </div>
    <div>
      <label htmlFor="email" className="block font-semibold mb-1">Email</label>
      <input type="email" ref={emailRef} id="email" name="email" className="enter-email w-full px-4 py-2 border rounded-md" placeholder="Enter your email" />
    </div>
    <div>
      <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
      <input type="tel" ref={phoneRef} id="phone" name="phone" className="enter-phone w-full px-4 py-2 border rounded-md" placeholder="Enter your phone no" />
    </div>
    <div>
      <label htmlFor="message" className="block font-semibold mb-1">Message</label>
      <textarea id="message" ref={messageRef} name="message" rows="4" className="enter-message w-full px-4 py-2 border rounded-md" placeholder="Enter your message"></textarea>
    </div>
    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Submit</button>
  </form>
</div>

      

     <MapLeaflet className="map-box"/>
    

    </div>
</div> 
</>
  );
});

export default ContactComponent;
