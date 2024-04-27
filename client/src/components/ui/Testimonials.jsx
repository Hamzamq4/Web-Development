import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

function Testimonials() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      toast({
        title: "Error",
        description: "Please ensure both your name and review are filled out.",
        status: "error",
        variant: "destructive",
      });
      return;
    }

    Axios.post("http://localhost:8000/Post", {
      Name: name,
      Review: review,
    })
      .then(() => {
        console.log("Success");
        toast({
          title: "Success",
          description:
            "Your review has been submitted successfully. Thank you! (Hint: Refresh the site, to see your review.)",
          status: "success",
          variant: "default",
        });
        setName("");
        setReview("");
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to submit the review.",
          status: "error",
          variant: "destructive",
        });
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
        <div className="max-w-[1355px] flex items-stretch  justify-center pt-2 mx-auto">
          <div className="bg-foreground max-w-[677px] max-h-[500px] rounded-lg flex-1 mr-2 justify-center items-center flex flex-col shadow-custom pt-10 pb-10">
            <h1 className="text-4xl font-bold text-white text-center">
              Our clients love us ❤️
            </h1>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="horizontal"
              className=" max-w-[650px] mx-auto p-10"
            >
              <CarouselContent>
                {APIData.map((data) => {
                  if (
                    data.properties.Name.title.length > 0 &&
                    data.properties.Review.rich_text.length > 0
                  ) {
                    return (
                      <CarouselItem key={data.id} className="text-black">
                        <p className="text-xl font bold text-slate-400">
                          {data.properties.Review.rich_text[0].plain_text}
                        </p>
                        <h2 className="text-lg pt-2 text-customblue">
                          {data.properties.Name.title[0].plain_text}
                        </h2>
                      </CarouselItem>
                    );
                  }
                  return null;
                })}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>

          <div className="bg-foreground max-w-[677px] max-h-[500px] rounded-lg pt-10 pb-10 ml-2 flex-1 justify-center items-center flex flex-col shadow-custom">
            <div className="w-[520px]">
              <h1 className="text-4xl font-bold text-white p-2 text-center">
                Submit a review
              </h1>
              <p className="text-slate-400 text-center">
                We'd love to hear from you
              </p>
              <form
                className="mt-2 w-full flex flex-col"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col mb-4">
                  <p className="mb-2">Name</p>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border p-2 rounded-lg text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <p className="mb-2">Review</p>
                  <textarea
                    placeholder="They are awesome!!"
                    className=" p-2 rounded-lg text-black shadow-custom text-sm"
                    rows="6"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </div>

                <Button
                  className="self-end mt-2 rounded-full bg-customblue text-white hover:bg-sky-700"
                  type="submit"
                >
                  Submit Review →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
