import React from "react";
import "./footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
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
    <footer>
      <div className="price">
        <h2>Basic Plan</h2>
        <h3 >
          Offer Ends in{" "}
          <span class="minutes">{String(minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span class="seconds">{String(seconds).padStart(2, "0")}</span> Mins
        </h3>
      </div>
      <div className="price-3">
        <a href="https://rzp.io/l/phBlT9OqT" target="_blank" rel="noreferrer">
          <button>Book Your Spot Now</button>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
