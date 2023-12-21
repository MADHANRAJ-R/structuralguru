import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-scroll';
import "./section_1.css";
import tick from "../assets/tick-symbol.png";
import companyLogo from '../assets/sg-profile-logo.jpg'

const Section1 = () => {

  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
  
    
      if (top >= offset - height / 2 && top < offset + height) {
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
      }
    });
  };
  

  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 0) {
      
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    
    localStorage.setItem("timer", JSON.stringify({ minutes, seconds }));
  }, [minutes, seconds]);

  useEffect(() => {
    
    const savedTimer = JSON.parse(localStorage.getItem("timer"));
    if (savedTimer) {
      setMinutes(savedTimer.minutes);
      setSeconds(savedTimer.seconds);
    }
  }, []);

  return (
    <section className="sec-1 show-animate">
      <div className="sec-1-div ">
        <div className="logo-img">
          <img className="animate" src={companyLogo} alt="company-logo"  />
          <h1 className="company-name">StructuralGuru</h1>
        </div>

        <div className="quotes">
          <p className="quotes-2">
            WELCOME TO PRACTICAL STRUCTURAL DESIGN <br />
            CONSULTANCY TRAINING !
          </p>
          <div className="quotes-center-line"></div>
          <p className="motto-quote">
          Help Each Other, Grow Together !<span className="showRigth-animate"></span></p>
        </div>

        <div className="course-main-div">
          <div className="quotes-center">
            <p className="quotes-1 animate">Design your success!</p>
          </div>
          <div className="courese-inner-div">
            <div className="left-div animate">
              <h1 className="left-title">Why You Should Join?</h1>
              <ul>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  To become expert in manual RCC & STEEL design calculations.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  To become expert in 5 softwares (Etabs, Staadpro connect,Safe,Rcdc,IdeaStatica) based RCC & Steel designs.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  To become expert in both RCC & STERL manual detailing and automated software based detailing.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  To practice RCC & STEEL design under live project and through expert guidance.
                </li>

                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  To easily switch job from any other field to design field without any hurdles.
                </li>
              </ul>
            </div>

            <div className="center-line"></div>

            <div className="right-div animate">
              <h1 className="right-title">What Happens When You Join?</h1>
              <ul>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Gain high knowledge confidence in structural design field in live practical way of learning.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Start your own design consultancy with our excellant step by step guidance.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Easily pass in any structural design role interviews and switch & settle in design field.

                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Get our free pan India services franchise in both training and consultancy business.

                </li>

                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  If selected, join in our company in various positions.

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="offer-timer-div">
          <div className="offer-end-main">
            <h3>Register in next</h3>

            <div class="offer-end-div">
              <div class="time-box">
                <span class="minutes">{String(minutes).padStart(2, "0")}</span>
                <span className="min">Minutes</span>
              </div>

              <div class="time-box">
                <span class="seconds">{String(seconds).padStart(2, "0")}</span>
                <span className="sec">Seconds</span>
              </div>
            </div>
          </div>

          <Link activeClass='active' to='paymentId' spy={true} smooth={true} offset={50} duration={1000} className="offer-button"><button>Pricing Plans</button></Link>
         
          
        </div>

      </div>
    </section>
  );
};

export default Section1;

