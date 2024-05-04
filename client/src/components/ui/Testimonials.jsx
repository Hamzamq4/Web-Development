import React, { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Button } from "@/components/ui/button";
import heroPic from "/heroPic.png";
import useFetchTestimonials from "@/API/useFetchTestimonials";
import useSubmitReview from "@/API/useSubmitReview";

function Testimonials() {
  const APIData = useFetchTestimonials();
  const {
    name,
    setName,
    position,
    setPosition,
    review,
    setReview,
    handleSubmit,
    isLoading,
  } = useSubmitReview();

  return (
    <>
      <section className="justify-center items-center flex-col pb-36 w-full">
        <div className="max-w-[1355px] flex flex-col items-stretch justify-center pt-2 mx-auto">
          {/* Reviews Header */}
          <div className="flex-col justify-center items-center flex">
            <div className="bg-foreground shadow-custom rounded-lg px-3 pt-1 pb-1">
              <div className="text-customblue font-bold">Reviews</div>
            </div>
            <div className="mt-3 max-w-[624px]">
              <div className="text-center text-5xl font-black">
                Reviews on some of our{" "}
                <span className="text-customblue">great work</span>
              </div>
            </div>
          </div>

          <div className=" w-full flex items-stretch justify-center pt-2 mx-auto mt-12">
            {/* Carousel Container */}
            <div className="bg-foreground max-w-[670px] rounded-lg  px-8 mr-3 flex-1 pt-10 pb-8 shadow-custom">
              <Carousel
                className="h-full w-full"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    onClick={handlePrev}
                    className="absolute bottom-1 left-4 z-[52] flex mt-3 mb-3"
                  >
                    <></>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    onClick={handleNext}
                    className="absolute bottom-1 right-4 z-[52] flex mt-3 mb-3"
                  >
                    <></>
                  </IconButton>
                )}
                autoplay={true}
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-5 left-2/4 z-50 flex items-center -translate-x-2/4 gap-2 mt-3 mb-3">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "w-8 bg-customblue"
                            : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {APIData.map((data, index) => (
                  <div key={index} className="pb-20 relative">
                    <div className="text-white text-[18px] font-[400] leading-8 pb-4 pt-4 w-[100%] flex flex-1 flex-col justify-center items-center self-center overflow-hidden">
                      {data.properties.Review.rich_text[0].plain_text}
                    </div>
                    <div className="border-t border-white/50 mt-2 pt-3">
                      <div className="justify-start items-center flex">
                        <div className="mr-4">
                          <img
                            src={
                              data.properties.Image &&
                              data.properties.Image.files.length > 0
                                ? data.properties.Image.files[0].file.url
                                : heroPic
                            }
                            alt="User Image"
                            className="rounded-full border border-customblue w-14 h-14 align-middle inline-block object-cover"
                          />
                        </div>
                        <div>
                          <div>{data.properties.Name.title[0].plain_text}</div>
                          <div className="mt-1 text-white/50">
                            {data.properties.Position &&
                            data.properties.Position.rich_text.length > 0
                              ? data.properties.Position.rich_text[0].plain_text
                              : "User"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Form Container */}
            <div className="bg-foreground max-w-[670px] rounded-lg pt-10 pb-10 flex-1 justify-center items-center flex flex-col shadow-custom">
              <div className="w-full items-center justify-center flex flex-1 flex-col">
                <div className="border-b border-white/50 mb-5">
                  <h1 className="text-4xl font-bold text-white p-2 text-center">
                    Submit a <span className="text-customblue"> Review </span>
                  </h1>
                  <p className="text-white/50 text-center pb-2">
                    We'd love to hear from you
                  </p>
                </div>
                <form
                  className="mt-2 w-[90%] flex flex-col self-center"
                  onSubmit={handleSubmit}
                  id="form"
                >
                  <div className="flex flex-row justify-between mb-4">
                    <div className="flex flex-col mr-4 flex-grow">
                      <p className="mb-2">Name</p>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="p-2 rounded-lg text-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <p className="mb-2">Position</p>
                      <input
                        type="text"
                        placeholder="Accountant"
                        className="p-2 rounded-lg text-black"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        id="position"
                        autoComplete="position"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4">
                    <p className="mb-2">Review</p>
                    <textarea
                      placeholder="They are awesome!!"
                      className="p-2 rounded-lg text-black shadow-custom text-sm"
                      rows="6"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      id="review"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="self-end mt-2 rounded-full bg-customblue text-white hover:bg-customblue/60 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting" : "Submit Review →"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
