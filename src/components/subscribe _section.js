import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './subscribe_section.css';

const Subscribe = () => {
  const handleSubmit =(e)=>{
    e.preventDefault();
    messageSent();
    sendEmail();
    e.target.reset();
  };
  const messageSent=()=>{
    window.alert('Successfully Message Sent');

  };

  const form = useRef();
  const sendEmail = () => {
    

    emailjs.sendForm('service_eff1wqj', 'template_dye6c68', form.current, '4bo8pwLC9lbwoYsrg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" >
        <div className="contactPage">
            <h1 className="contactPageTitle">Subscribe Here</h1>
            <span className="contactDesc">Please fill out the form below to get subscribed for more updates.</span>
             <form  className="contactform" ref={form} onSubmit={handleSubmit}>
                <input type="text" className="fullname" placeholder='Your Name' name='from_name' required/>
                <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                <input type="tel" id="phoneNumber" placeholder='Your Phone Number' className="fullname" name="phoneNumber" pattern="[0-9]{10}" required />
                
                <textarea name="message" rows="5" className="msg" placeholder='Your Message (optional)'></textarea> <br />
                <button type='submit' value='Send' className="submitbtn">Subscribe</button>
             </form>
        </div>
    </section>
    
  )
}

export default Subscribe;