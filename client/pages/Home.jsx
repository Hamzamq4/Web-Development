import React, { useState, useEffect } from "react";
import { Button } from "../src/components/ui/button";

function Home() {
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
      {/* Hero Section Start */}
      <section className=" justify-center items-center flex-col pb-36 w-full">
        {/* Hero Container Start */}
        <div className=" max-w-[1355px] flex items-center justify-center pt-2 mx-auto">
          {/* Hero Content 1 Start*/}
          <div className="bg-foreground max-w-2xl rounded-3xl pt-36 pb-36 flex-1 mr-2 justify-center items-center flex flex-col shadow-custom">
            <span className=" mb-5 p-2 bg-background rounded-xl">
              <h2 className=" text-white text-sm ">Hamza & Simon</h2>
            </span>
            <h1 className="text-4xl font-bold text-white ">
              Welcome to our website
            </h1>
            <p className="text-white mt-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptas voluptate quia autem, officia vel quidem, officiis
              necessitatibus, fugit cumque doloremque.
            </p>
            <Button className="mt-5 bg-white text-black hover:bg-sky-700 hover:text-white">
              {" "}
              Read more
            </Button>
          </div>
          {/* Hero Content 1 End*/}
          {/* Hero Content 2 Start */}
          <div className="max-w-2xl bg-foreground rounded-3xl pt-36 pb-36 flex-1 ml-2 justify-center items-center flex flex-col shadow-custom">
            <span className=" mb-5 p-2 bg-background rounded-xl">
              <h2 className=" text-white text-sm ">Hamza & Simon</h2>
            </span>

            <h1 className="font-bold text-white text-4xl ">
              Welcome to our website
            </h1>
            <p className="text-white mt-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptas voluptate quia autem, officia vel quidem, officiis
              necessitatibus, fugit cumque doloremque.
            </p>
            <Button className="mt-5 bg-white text-black hover:bg-sky-700 hover:text-white">
              {" "}
              Read more
            </Button>
          </div>
          {/* Hero Content 2 End */}
        </div>
        {/* Hero Container End */}
        {/* Graduation Timer */}
        <div className="bg-foreground max-w-[1355px] mx-auto mt-4 rounded-3xl text-center font-bold text-white pt-6 pb-6 gap-2 shadow-custom flex flex-col items-center">
          <span className="text-5xl mb-5">Graduation in</span>
          <div className="flex flex-row justify-center items-center w-full px-6">
            <div className="flex flex-col items-center flex-grow">
              <span className="p-6 shadow-custom rounded-xl text-6xl ">
                {timeLeft.days}
              </span>
              <span className="text-2xl">Days</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
              <span className="p-6 shadow-custom rounded-xl text-6xl">
                {timeLeft.hours}
              </span>
              <span className="text-2xl">Hours</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
              <span className="p-6 shadow-custom rounded-xl text-6xl">
                {timeLeft.minutes}
              </span>
              <span className="text-2xl">Minutes</span>
            </div>
            <div className="flex flex-col items-center flex-grow">
              <span className="p-6 shadow-custom rounded-xl text-6xl">
                {timeLeft.seconds}
              </span>
              <span className="text-2xl">Seconds</span>
            </div>
          </div>
        </div>
        {/* Graduation Timer End */}
      </section>
      {/* Hero Section End */}
    </>
  );
}

export default Home;
