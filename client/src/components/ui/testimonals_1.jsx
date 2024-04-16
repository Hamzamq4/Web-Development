import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Axios from "axios";

function Testimonialss() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      alert("Please ensure both your name and review are filled out.");
      return;
    }

    Axios.post("http://localhost:8000/Post", {
      Name: name,
      Review: review,
    })
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchAndDisplayAPIData = () => {
    Axios.get("http://localhost:8000/Testimonials")
      .then((response) => {
        setAPIData(response.data.results);
        setShowAPIData(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAndDisplayAPIData();
  }, []);

  return (
    <>
      <section className="justify-center items-center flex-col pb-36 w-full">
        <div className="max-w-[1355px] flex items-center justify-center pt-2 mx-auto">
          <div className="bg-foreground max-w-2xl rounded-lg pt-10 pb-36 flex-1 mr-2 justify-center items-center flex flex-col shadow-custom">
            <h1 className="text-4xl font-bold text-white p-5 text-center">
              Take a look at what our clients have had to say!
            </h1>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className=" max-w-[650px] mx-auto rounded-lg p-10"
            >
              <CarouselContent>
                {APIData.map((data) => {
                  if (
                    data.properties.Name.title.length > 0 &&
                    data.properties.Review.rich_text.length > 0
                  ) {
                    return (
                      <CarouselItem key={data.id} className="text-black">
                        <h2 className="text-lg text-yellow-400">
                          {data.properties.Name.title[0].plain_text}
                        </h2>
                        <p className="text-3xl font bold text-slate-400">
                          {data.properties.Review.rich_text[0].plain_text}
                        </p>
                      </CarouselItem>
                    );
                  }
                  return null;
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="bg-foreground max-w-2xl rounded-lg pt-10 pb-36 flex-1 mr-2 justify-center items-center flex flex-col shadow-custom">
            <h1 className="text-4xl font-bold text-white p-5 text-center">
              Submit a review
            </h1>
            <p className="text-slate-400 text-center">
              {" "}
              We'd love to hear from you{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonialss;
