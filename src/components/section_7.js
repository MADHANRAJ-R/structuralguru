import React from "react";
import {Link} from 'react-scroll';
import "./section_7.css";

const section7 = () => {
  return (
    <section className="sec-7 show-animate">
      <div className="video-review-container">
        <h1>VIDEO REVIEWS OF THIS TRAINING</h1>
        <div className="video-main-div animate">
          <div className="video-review-card">
            <p className="reviewer-name">
              Mrs.Mamta, Sr. Structural Engineer, Uttrakhand Nigam Govt, PWD
              Department.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/N45Ws4l8I6Q?si=unNXFMxFncld7LLg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              75+ Civil supervisors Transformed in Design career !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mrs.Snehal, Structural Engineer, Pune, Feedback on Practical
              Structural Design Training
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/OWr5P_Gmf3o?si=A-P5Mxlf1GAa01MD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              20+ Freelancing engineers Transformed in Design career !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mr.Suresh, Sr. Structural Design Engineer, DB Engineering &
              Consulting GmbH, Germany.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/4TFWFJFGTMI?si=bZCphkAwgrkOx2q2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              150+ Civil Engineers Transformed and entered in Design career !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mr.Srinivasacharya, Director of Shubham Consultants, Hyderabad.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/w_w0BjXJmGs?si=RWHpBTTwRnqqb610"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              110+ Consultants Trained and created till now!
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mr.Vasanth,Engineer of Department of Atomic Energy, GOVT of India,
              Chennai.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/wSYQvpPuW-4?si=_esGasYQ3nn92-QY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              50+ Site Construction Engineers shifted in to design field !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mr.Dhayanidhi, Retired ISRO Mechanical Engineer, Govt of India.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/zBBc9kGrCj8?si=t86MxeBQIhne_V41"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              5+ Other Discipline Engineers trained in to structural design
              field !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Mr.Vijay, Civil Engineering Consultant, Chennai.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/RaMpDg1Xu4I?si=NIp8eZ7WJIsT6paH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              500+ Engineer's life has transformed !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Feedback of Mr.Basanta Khadka, Engineering Consultant, Katmandu,
              Nepal.
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/g7zzMWwcM7M?si=kuvCiN-Alo3-7sKi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              70+ Abroad Engineer's life has transformed !
            </p>
          </div>

          <div className="video-review-card">
            <p className="reviewer-name">
              Practical structural design training review from Mr. Daniel Mamona
              Matiaba, South African govt senior
            </p>
            <div className="reviewer-video">
              <iframe
                src="https://www.youtube.com/embed/k3ii5zVN7J0?si=LwWL2bda_eh2SI7V"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p className="reviewer-experience">
              70+ Abroad Engineer's life has transformed !
            </p>
          </div>
        </div>
        <div className="pricing-btn">
          <Link activeClass='active' to='paymentId' spy={true} smooth={true} offset={50} duration={1000} className="offer-button"><button>Pricing Plans</button></Link>
        </div>
      </div>
    </section>
  );
};

export default section7;
