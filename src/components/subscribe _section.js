import React from "react";
import whatsappLogo from '../assets/whatsapp-logo.png';
import "./subscribe_section.css";

const Subscribe = () => {
  return (
    <section className="official-web">
      <h1 className="web-h1">CONTACT US</h1>
      <div className="web-div">
        <h3 className="web-h3">OUR HEAD OFFICE IN TAMILNADU</h3>

        <p className="contact-p1">StructuralGuru-GURURYAR ASSOCIATES</p>
        <p className="contact-p2">D-54, 2nd Floor, Trichy Coworks, 9th A Cross, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018, INDIA.</p>
        <a
          href="https://www.google.com/maps/dir//D-54,+2nd+Floor,+Trichy+Coworks,9th+A+Cross,+Thillai+Nagar,+Tiruchirappalli,+Tamil+Nadu+620018,+INDIA./@11.7589301,77.9852846,15z/data=!3m1!4b1?entry=ttu"
          rel="noreferrer"
          target="_blank"
        >
          <button className="contact-loc" >OUR OFFICE LOCATION</button>
        </a>
        <p className="contact-p1">We love our customers, so feel free to contact during normal business hours.</p>
        
        <a
          href="https://wa.me/919629121300"
          rel="noreferrer"
          target="_blank"
          className="contact-a2"
        >
          <button className="whatsappButton"><img src={whatsappLogo} alt="whatsappLogo" />MESSAGE TO CUSTOMER CARE</button>
        </a>
       
        <p className="contact-p3" >Mobile No. <a className="contact-a" href="tel:9629121300">9629121300</a> (For Whatsapp calls also) (GOVT. REGISTERED NO: TN27D<a className="contact-a" href="tel:0018377">0018377</a>)<br/> Email: <a className="contact-a" href="mailto:admin@gururayarassociates.com">admin@gururayarassociates.com</a> <a className="contact-a" href="mailto:gururayarassociates@gmail.com">gururayarassociates@gmail.com</a></p>
        <p className="contact-p1">Just Message in Whatsapp for appointment before to call or visit our office. Thanks!</p>

        <div className="disclaimer-div">
          <h1>DISCLAIMER !</h1>
          <p>To all our clients/customers, we request that you execute all payments <b>ONLY</b> through this website's payment gateway or through our official GPay/PhonePe/Paytm number: <b>+91-9629121300</b>, to avoid issues related to fraudulent activity.</p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
