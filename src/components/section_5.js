import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./section_5.css";
import tick from "../assets/tick-symbol.png";

const Section5 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    messageSent();
    sendEmail();
    e.target.reset();
  };
  const messageSent = () => {
    window.alert("Subscribed Successfully ! ");
  };

  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_5mnamig",
        "template_sumy8vq",
        form.current,
        "lTkxREBj-LHdnWv1w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="paymentId" className="sec-5 show-animate">
      <div className="payment-info-div">
        <h1 className="payment-title">Our Training Plans</h1>

        <div className="payment-container">
          <div className="payment-method-1 animate">
            <div className="basic-plan-column">
              <div className="pro-plan-mode-1">
                <h1 className="plans-h1 basic-h1">
                  Basic <span className="plan-rec">Recommended</span>
                </h1>
                <b>(Pre-Recorded Video Mode)</b>
              </div>

              <div className="plans-p">
                <b>₹ 3,500/-</b>
                <p>(Single Payment Only)</p>
              </div>

              <p className="plans-p3">
                for 1-year access to videos and lifetime access to files.
              </p>
              <p className="plans-p2">
                Get started with our Basic plan and kickstart your learning
                journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Duration - 2 months.
                </li>
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in online/phone
                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American &
                  300+ BS code design xl sheets supply.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.
                </li>
              </ul>

              <a
                href="https://rzp.io/l/phBlT9OqT"
                target="_blank"
                rel="noreferrer"
                className="plans-link"
              >
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
            <div className="pro-plan-column">
              <div className="pro-plan-mode">
                <h1 className="plans-h1 basic-h1"> Pro </h1>
                <b>(Live Zoom Webinar Mode)</b>
              </div>

              <div className="plans-p">
                <b>₹ 50,000/-</b>
                <p>(Single Payment Only)</p>
              </div>

              <p className="plans-p3">
                for 1-year access to videos and lifetime access to files.
              </p>
              <p className="plans-p2">
                Get started with our Pro plan and kickstart your learning
                journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Duration - 10 months.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Live zoom webinars 3 hrs per week.
                </li>
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in live zoom webinar.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American &
                  300+ BS code design xl sheets supply.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.
                </li>
              </ul>

              <a
                href="https://rzp.io/l/kHucYoACi1"
                target="_blank"
                rel="noreferrer"
                className="plans-link"
              >
                <button className="plans-button">Buy Now</button>
              </a>
            </div>

            <div className="pro-plus-column">
              <div className="pro-plan-mode">
                <h1 className="plans-h1 basic-h1"> Pro Plus</h1>
                <b>(Live Offline Class Mode)</b>
              </div>

              <div className="plans-p">
                <b>₹ 1,00,000/-</b>
                <p>(Single Payment Only)</p>
              </div>

              <p className="plans-p3">
                for 1-year access to videos and lifetime access to files.
              </p>
              <p className="plans-p2">
                Get started with our Pro Plus plan and kickstart your learning
                journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Duration - 2 months.
                </li>

                <li>
                  <img src={tick} alt="" />
                  Live offline class 3 hrs per day except Sunday.
                </li>
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in direct class itself.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American &
                  300+ BS code design xl sheets supply.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.
                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.
                </li>
              </ul>

              <a
                href="https://rzp.io/l/KLM5qG4aOl"
                target="_blank"
                rel="noreferrer"
                className="plans-link"
              >
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
          </div>

          <div className="payment-center-line-forcolumn">
            <p className="or">or</p>
          </div>
          <div className="payment-method-2 animate">
            <p className="payment-info2">
              You can also pay directly to UPI Gpay/PhonePe/Paytm no.
              9629121300. <b className="font-bold-payment">IMPORTANT:</b> After
              payment send receipt & gmail id to WhatsApp no.{" "}
              <b className="font-bold-payment">+91-9629121300</b>. We will
              dispatch the course contents to your gmail id and google drive.
            </p>
          </div>

          <div className="contactPage">
            <h1 className="contactPageTitle">For more updates, Subscribe </h1>

            <form
              className="contactform animate"
              ref={form}
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="email"
                placeholder="Your Email"
                name="from_email"
                required
              />
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your WhatsApp Number"
                className="fullname"
                name="phoneNumber"
                pattern="[0-9]{10}"
                required
              />{" "}
              <br />
              <button type="submit" value="Send" className="submitbtn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
