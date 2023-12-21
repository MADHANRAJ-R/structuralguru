import React from "react";
import {Link} from 'react-scroll';
import "./section_3.css";
import tick from "../assets/tick-symbol.png";
import broucherImg from "../assets/img1.webp";

const section3 = () => {
  return (
    <section className="sec-3 show-animate">
      <div className="feature-list">
        <h1 className="features-title">Key Features of The Training </h1>
        <div className="sec-3-center-line"></div>
        <ul className="animate">
          <li style={{ "--i": 0 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            This training is available in 200 hrs pre-recorded video
            mode(Basic), live zoom webinar mode (Pro) and live offline mode (Pro
            plus) in English, Tamil, Hindi and Telugu languages.{" "}
          </li>
          <li className="animate" style={{ "--i": 1 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Life time doubts and clarifications support through WA, or SKYPE, or
            ZOOM.
          </li>
          <li className="animate" style={{ "--i": 2 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            25 yrs experienced teaching in practical way.
          </li>
          <li className="animate" style={{ "--i": 3 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Structural design concepts covered from basic scratch to advanced
            level.
          </li>
          <li className="animate" style={{ "--i": 4 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Get hands on Experience with industry experts.{" "}
          </li>
          <li className="animate" style={{ "--i": 5 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Live Project work reviews & guidance's.{" "}
          </li>
          <li className="animate" style={{ "--i": 6 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Life time access for xl files, manuals, books, notes.{" "}
          </li>
          <li className="animate" style={{ "--i": 7 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Life time after training technical guidance support.{" "}
          </li>
          <li className="animate" style={{ "--i": 8 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Academic project/thesis support guidance's.
          </li>
          <li className="animate" style={{ "--i": 9 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            Paid internship workshops training for students.
          </li>
          <li className="animate" style={{ "--i": 10 }}>
            <span>
              <img
                className="tick-sym"
                src={tick}
                alt="tick symbol"
                width={20}
                height={20}
              />
            </span>
            We Provide 100% cash back, if one joined with us in business
            development team (training will be provided by us) and completed 5
            nos sales of this same training by him/her.
          </li>
        </ul>
        <div className="pricing-btn">
          <Link activeClass='active' to='paymentId' spy={true} smooth={true} offset={50} duration={1000} className="offer-button"><button>Pricing Plans</button></Link>
        </div>
      </div>
      <div className="more-content-div animate">
        
        <div className="brochureImg-div">
          <img src={broucherImg} alt="broucherImg" className="brochure-img" />
        </div>
        <a
          href="https://img1.wsimg.com/blobby/go/2e42f0cb-874d-433d-b9df-6117d6050d2b/downloads/Syllabus%20for%20TR-1000-1%20PSDCT-V.pdf?ver=1668681551847"
          rel="noreferrer"
          target="_blank"
        >
          <button className="course-pdf">View Syllabus Brochure</button>
        </a>
      </div>
    </section>
  );
};

export default section3;
