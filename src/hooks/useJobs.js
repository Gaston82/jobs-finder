import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getAllJobs = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }
      const config = {
        headers: {
          "Context-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs",
          config
        );
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllJobs();
  }, []);

  return { jobs };
};

export { useJobs };
