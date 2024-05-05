import { useState, useEffect } from "react";
import Axios from "axios";

const useFetchProjects = () => {
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);
  const fetchProjectsUrl = import.meta.env.VITE_FETCH_PROJECTS;

  const fetchAndDisplayAPIData = () => {
    Axios.get(fetchProjectsUrl)
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
