// import React, { useEffect, useState } from "react";
// import { Link, Element } from "react-scroll";
// import "react-tabs/style/react-tabs.css";
// import { getDiscount } from "../../Redux/action/discount.action";
// import { useSelector } from "react-redux";

// const DisvountTiming = () => {
//   const discountVal = useSelector((state) => state.discount);
//   console.log("discountVal", discountVal);

//   // const calculateTimeLeft = () => {
//   //   const difference = +new Date("2024-12-31") - +new Date();
//   //   let timeLeft = {};

//   //   if (difference > 0) {
//   //     timeLeft = {
//   //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//   //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//   //       minutes: Math.floor((difference / 1000 / 60) % 60),
//   //       seconds: Math.floor((difference / 1000) % 60),
//   //     };
//   //   }

//   //   return timeLeft;
//   // };

//   // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setTimeLeft(calculateTimeLeft());
//   //   }, 1000);

//   //   return () => clearTimeout(timer);
//   // }, [timeLeft]);

//   return (
//     <div>
//       <div className="categories__deal__countdown__timer" id="countdown">
//         <div className="cd-item">
//           {/* <span>{timeLeft.days || "0"}</span> */}
//           <span>{"0"}</span>
//           <p>Days</p>
//         </div>
//         <div className="cd-item">
//           <span>{"0"}</span>
//           <p>Hours</p>
//         </div>
//         <div className="cd-item">
//           <span>{"0"}</span>
//           <p>Minutes</p>
//         </div>
//         <div className="cd-item">
//           <span>{"0"}</span>
//           <p>Seconds</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisvountTiming;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DisvountTiming = () => {
  const discountVal = useSelector((state) => state.discount);
  const discountEndDate = discountVal.date;

  console.log("discountVal", discountEndDate); // Check if the date is fetched correctly

  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(discountEndDate);

    const difference = endDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!discountEndDate) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [discountEndDate]);

  return (
    <div>
      <div className="categories__deal__countdown__timer" id="countdown">
        <div className="cd-item">
          <span>{timeLeft.days !== undefined ? timeLeft.days : "0"}</span>
          <p>Days</p>
        </div>
        <div className="cd-item">
          <span>{timeLeft.hours !== undefined ? timeLeft.hours : "0"}</span>
          <p>Hours</p>
        </div>
        <div className="cd-item">
          <span>{timeLeft.minutes !== undefined ? timeLeft.minutes : "0"}</span>
          <p>Minutes</p>
        </div>
        <div className="cd-item">
          <span>{timeLeft.seconds !== undefined ? timeLeft.seconds : "0"}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default DisvountTiming;
