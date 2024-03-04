import React from "react";
import { useState, useEffect } from "react";
import imgs from "../image";

import "./interval.css";

const Interval = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds > imgs.length) clearInterval(interval);
        return seconds < imgs.length - 1 ? seconds + 1 : 0;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div>
        <img
          className="image rotate-scale-up"
          src={imgs.find((img, i) => i === seconds)}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Interval;
