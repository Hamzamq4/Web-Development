import React, { useState, useEffect } from "react";

function Timer() {
  const deadline = new Date("June 28, 2024 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <>
      {/* <div className="max-w-[1355px] mx-auto mt-4 text-center font-black flex justify-center items-center">
        <span className="text-5xl font-black p-5 ">
          Time Left Till Graduation 🥳
        </span>
      </div> */}
      <div className="bg-foreground max-w-[1355px] mx-auto mt-4 rounded-3xl text-center font-bold text-white pt-5 pb-5 shadow-custom flex flex-col items-center">
        <div className="flex flex-row justify-center items-center w-[90%] px-6">
          <span className="text-3xl font-black text-start mr-20">
            Time Left Till Graduation 🥳
          </span>
          <div className="flex flex-col items-center flex-grow">
            <div className="p-3">
              <span className=" text-4xl">{timeLeft.days} </span>
              <span className="text-xl">Days</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <div className="p-3">
              <span className="text-4xl">{timeLeft.hours} </span>
              <span className="text-xl">Hours</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <div className="p-3">
              <span className="text-4xl"> {timeLeft.minutes} </span>
              <span className="text-xl">Min</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <div className="p-3">
              <span className="text-4xl">{timeLeft.seconds} </span>
              <span className="text-xl">Sec</span>
            </div>
          </div>
        </div>
      </div>
      {/* Graduation Timer End */}
    </>
  );
}

export default Timer;
