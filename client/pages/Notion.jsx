import React, { useState } from "react";
import Axios from "axios";
import { Button } from "../src/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import viteLogo from "../public/vite.svg";

function Notion() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/NotionAPIPost", {
      Name: name,
      Review: review,
    })
      .then(() => {
        // Add your success logic here (e.g., a success message or redirect)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchAndDisplayAPIData = () => {
    Axios.get("http://localhost:8000/NotionAPIGet")
      .then((response) => {
        setAPIData(response.data.results);
        setShowAPIData(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />

            <p>Review</p>
            <input
              type="text"
              placeholder="Your Review"
              onChange={(e) => setReview(e.target.value)}
            />

            <Button type="submit">Submit</Button>
          </form>
          <Button onClick={fetchAndDisplayAPIData}>Load Reviews</Button>
        </div>

        {showAPIData && (
          <div className="Data">
            <p className="text-lg font-bold mb-4">API DATA</p>
            <Tabs defaultValue="Hamza" className="w-full">
              <TabsList className="bg-black text-white">
                <TabsTrigger value="Hamza">
                  {" "}
                  <img src={viteLogo} alt="Vite logo" /> Hamza
                </TabsTrigger>
                <TabsTrigger value="Simon">Simon</TabsTrigger>
              </TabsList>

              <TabsContent value="Hamza">
                <div className="flex flex-wrap -m-2">
                  {APIData.map((data) => {
                    if (
                      data.properties.Name.title.length > 0 &&
                      data.properties.Review.rich_text.length > 0
                    ) {
                      return (
                        <div
                          key={data.id}
                          className="p-2 w-1/2 md:w-1/3 lg:w-1/4"
                        >
                          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4 flex flex-col justify-between h-52 w-52 content-evenly">
                            <p className="text-xl font-semibold">
                              {data.properties.Name.title[0].plain_text}
                            </p>
                            <p className="text-gray-600">
                              {data.properties.Review.rich_text[0].plain_text}
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </TabsContent>

              <TabsContent value="Simon">
                <p>Her kommer Simons Testimonials</p>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </header>
    </div>
  );
}

export default Notion;
