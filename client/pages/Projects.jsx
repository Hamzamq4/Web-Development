import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Popup from "@/components/ui/popup";
import viteLogo from "/vite.svg";

function Projects() {
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);
  const [popup, setPopup] = useState(null);

  const fetchAndDisplayAPIData = () => {
    Axios.get("http://localhost:8000/HamzaProjects")
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
    <div className="App">
      <header className="App-header">
        {showAPIData && (
          <div className="Data">
            <h1 className="text-lg font-bold mb-4">Projects</h1>
            <p>
              On this page, you will find the various projects that Simon and
              Hamza have worked on both collectively and separately
            </p>
            <Tabs defaultValue="Hamza" className="w-full">
              <TabsList className="bg-black text-white">
                <TabsTrigger value="Hamza">
                  <img src={viteLogo} alt="Vite logo" /> Hamza
                </TabsTrigger>
                <TabsTrigger value="Simon">Simon</TabsTrigger>
              </TabsList>

              <TabsContent value="Hamza">
                <div className="flex flex-wrap -m-2">
                  {APIData.map((data) => {
                    if (
                      data.properties.ProjectName.title.length > 0 &&
                      data.properties.ShortSum.rich_text.length > 0 &&
                      data.properties.LongSum.rich_text.length > 0
                    ) {
                      return (
                        <div
                          key={data.id}
                          className="p-2 w-1/2 md:w-1/3 lg:w-1/4"
                        >
                          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4 flex flex-col justify-between h-full">
                            <p className="text-xl font-semibold">
                              {data.properties.ProjectName.title[0].plain_text}
                            </p>
                            <p className="text-gray-600">
                              {data.properties.ShortSum.rich_text[0].plain_text}
                            </p>
                            <button onClick={() => setPopup(data)}>
                              See More
                            </button>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabsContent>

              <TabsContent value="Simon">
                <p>Simon's Testimonials will be displayed here.</p>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </header>
      <Popup isOpen={!!popup} onClose={() => setPopup(null)} project={popup} />
    </div>
  );
}

export default Projects;
