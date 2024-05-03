// useProjectDetails.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function useProjectDetails() {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const fetchProjectsUrl = import.meta.env.VITE_FETCH_PROJECTS;

  useEffect(() => {
    Axios.get(fetchProjectsUrl)
      .then((response) => {
        const projects = response.data.results;
        const specificProject = projects.find(
          (project) => project.id === projectId
        );
        setProjectData(specificProject);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [projectId]);

  return projectData;
}

export default useProjectDetails;
