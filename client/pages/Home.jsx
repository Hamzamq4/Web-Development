import React, { useState, useEffect } from "react";
import { Button } from "../src/components/ui/button";

function Home() {
  const deadline = new Date("June 1, 2024 00:00:00").getTime();
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
      <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">
        <div className="text-center mb-4 font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Coming Soon - Hamza and Simon's Portfolio website.
        </div>
        <Button className="bg-white text-black hover:bg-sky-700 hover:text-white">
          Homepage
        </Button>
        <div className="text-center font-bold text-gray-500 text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds
        </div>
      </div>
    </>
  );
}

export default Home;
