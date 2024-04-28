import React, { useState, useEffect } from "react";
import Axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);
  const [popup, setPopup] = useState(null);

  const fetchAndDisplayAPIData = () => {
    Axios.get("http://localhost:8000/Projects")
      .then((response) => {
        console.log(response.data.results);
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
      <section className="justify-center items-center pt-[100px] pb-[200px] flex">
        <div className="max-w-[1355px] flex-1 ml-[40px] mr-[40px]">
          <div className="flex-col flex items-start">
            <span className="mb-5 p-2 bg-foreground rounded-sm align-left">
              <h2 className="text-yellow-400 text-sm font-bold">PROJECTS</h2>
            </span>
            <h1 className="text-5xl font-bold">Some of our Projects</h1>
            <span className="text-slate-400 text-xl">
              that have already influenced a lot of people!
            </span>
          </div>

          <div className="mt-[56px]">
            <div className="grid grid-cols-2 auto-cols-fr gap-x-6 gap-y-6">
              {APIData.map((data, index) => {
                if (
                  data.properties.ProjectName.title.length > 0 &&
                  data.properties.ShortSum.rich_text.length > 0 &&
                  data.properties.LongSum.rich_text.length > 0 &&
                  data.properties.Media.files.length > 0 &&
                  data.properties.Tags.multi_select.length > 0
                ) {
                  // To adjust column sizing depending on the number of items. If uneven, then last item will span 2 columns
                  const isLastItem = index === APIData.length - 1;
                  const shouldSpanTwoColumns =
                    isLastItem && APIData.length % 2 !== 0;

                  return (
                    <a
                      href={`/projects/${data.id}`}
                      key={data.id}
                      className={`bg-foreground max-w-[677px] flex-col shadow-custom p-[24px] flex rounded-lg ${
                        shouldSpanTwoColumns
                          ? "col-span-2 max-w-full"
                          : "max-w-[677px]"
                      }`}
                    >
                      <img
                        src={data.properties.Media.files[0].file.url}
                        alt=""
                        className={`h-[200px]  rounded-lg relative overflow-hidden ${
                          shouldSpanTwoColumns
                            ? "col-span-2 max-w-full"
                            : "max-w-[677px]"
                        }`}
                      />

                      <div className="flex flex-wrap gap-x-3 gap-y-4 mt-[24px]">
                        {data.properties.Tags.multi_select.map((tag) => (
                          <div
                            key={tag.id}
                            className="shadow-custom bg-white px-4 py-2 font-bold rounded-lg flex items-center justify-center text-sm text-black whitespace-nowrap"
                          >
                            {tag.name}
                          </div>
                        ))}
                      </div>

                      <div className="justify-between flex relative flex-col">
                        <div>
                          <div>
                            <div className="pt-[24px] text-4xl font-bold">
                              {data.properties.ProjectName.title[0].plain_text}
                            </div>
                            <div
                              className={`pt-[16px] ${
                                shouldSpanTwoColumns
                                  ? "col-span-2 max-w-full"
                                  : "max-w-[677px]"
                              }`}
                            >
                              {data.properties.ShortSum.rich_text[0].plain_text}
                            </div>
                          </div>

                          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center absolute bottom-0 right-0 text-black hover:bg-black hover:text-white">
                            <AiOutlineArrowRight />
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
