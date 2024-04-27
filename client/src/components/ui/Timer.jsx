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
      {/* Graduation Timer */}
      <div className="bg-foreground max-w-[1355px] mx-auto mt-4 rounded-3xl text-center font-bold text-white pt-6 pb-6 gap-1 shadow-custom flex flex-col items-center">
        <span className="text-2xl mb-2 ">Time Left Till Graduation 🥳</span>
        <div className="flex flex-row justify-center items-center w-[80%] px-6">
          <div className="flex flex-col items-center flex-grow">
            <span className="p-3 rounded-xl text-4xl ">{timeLeft.days}</span>
            <span className="text-xl">Days</span>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <span className="p-3  rounded-xl text-4xl">{timeLeft.hours}</span>
            <span className="text-xl">Hours</span>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <span className="p-3 rounded-xl text-4xl">{timeLeft.minutes}</span>
            <span className="text-xl">Minutes</span>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <span className="p-3  rounded-xl text-4xl">{timeLeft.seconds}</span>
            <span className="text-xl">Seconds</span>
          </div>
        </div>
      </div>
      {/* Graduation Timer End */}
    </>
  );
}

export default Timer;
