// useFetchTestimonials.js
import { useState, useEffect } from "react";
import Axios from "axios";

const useFetchTestimonials = () => {
  const [APIData, setAPIData] = useState([]);
  const fetchTestimonialsUrl = import.meta.env.VITE_FETCH_TESTIMONIALS;

  useEffect(() => {
    Axios.get(fetchTestimonialsUrl)
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
