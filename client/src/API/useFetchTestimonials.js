// useFetchTestimonials.js
import { useState, useEffect } from "react";
import Axios from "axios";

const useFetchTestimonials = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/Testimonials")
      .then((response) => {
        setAPIData(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch testimonials:", error);
      });
  }, []);

  return APIData;
};

export default useFetchTestimonials;
