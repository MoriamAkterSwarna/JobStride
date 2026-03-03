/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export const useJobs = () => {
  const context = useContext(JobContext);0
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial jobs from jobs.json
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load jobs:", err);
        setLoading(false);
      });
  }, []);

  // Add a new job
  const addJob = (newJob) => {
    setJobs((prev) => [...prev, newJob]);
  };

  // Update an existing job
  const updateJob = (id, updatedJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...updatedJob } : job))
    );
  };

  // Delete a job
  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Update job status
  const updateJobStatus = (id, newStatus) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              status: newStatus,
              updatedAt: new Date().toISOString(),
              activity: [
                ...job.activity,
                {
                  id: `a${Date.now()}`,
                  type: "status_change",
                  description: `Moved to ${newStatus}`,
                  timestamp: new Date().toISOString(),
                  oldStatus: job.status,
                  newStatus: newStatus,
                },
              ],
            }
          : job
      )
    );
  };

  const value = {
    jobs,
    loading,
    addJob,
    updateJob,
    deleteJob,
    updateJobStatus,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export default JobContext;
