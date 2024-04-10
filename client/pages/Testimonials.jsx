import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "../src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../src/components/ui/card";

function Testimonials() {
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

    Axios.post("http://localhost:8000/NotionAPIPost", {
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
    Axios.get("http://localhost:8000/NotionAPIGet")
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
            <h1 className="text-2xl font-bold mb-4">Testimonials</h1>

            <div className="flex flex-wrap -m-2">
              {APIData.map((data) => {
                if (
                  data.properties.Name.title.length > 0 &&
                  data.properties.Review.rich_text.length > 0
                ) {
                  return (
                    <div key={data.id} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            {data.properties.Name.title[0].plain_text}
                          </CardTitle>
                          <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>
                            {data.properties.Review.rich_text[0].plain_text}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center shadow-lg">
          <span className="text-2xl font-extrabold">
            We'd love to get your feedback!
          </span>
          <div className="">
            <form
              className="flex w-5/6 p-10 justify-between"
              onSubmit={handleSubmit}
            >
              <p className="flex items-center">Name</p>
              <input
                type="text"
                placeholder="John Doe"
                className="border m-2 rounded-sm flex items-center"
                onChange={(e) => setName(e.target.value)}
              />

              <p className="flex items-center">Review</p>
              <input
                type="text"
                placeholder="They are awesome!!"
                className="border m-2 rounded-sm flex items-center"
                onChange={(e) => setReview(e.target.value)}
              />

              <Button className="m-2" type="submit">
                {" "}
                Submit{" "}
              </Button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Testimonials;
