import { useState, useEffect } from "react";
import Axios from "axios";

const useFetchProjects = () => {
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);

  const fetchAndDisplayAPIData = () => {
    Axios.get("http://localhost:8000/Projects")
      .then((response) => {
        console.log(response.data.results);
        setAPIData(response.data.results);
        setShowAPIData(true);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  useEffect(() => {
    fetchAndDisplayAPIData();
  }, []);

  return { APIData, showAPIData };
};

export default useFetchProjects;
