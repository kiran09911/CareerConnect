import React, { useState, useEffect } from "react";

const JobListings = () => {
  const [jobs, setJobs] = useState([]); // State for job listings
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch job listings from API
  const fetchJobs = async () => {
    setLoading(true); // Show loading spinner
    setError(null); // Reset any previous errors
    try {
      const response = await fetch("http://localhost:8000/api/jobs/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      });
      if (response.ok) {
        const jobsData = await response.json();
        setJobs(jobsData);
      } else if (response.status === 401) {
        // Unauthorized access (token missing or invalid)
        alert("Please log in to view job listings.");
      } else {
        throw new Error("Failed to fetch job listings.");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError(error.message || "Unknown error occurred.");
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []); // Fetch jobs only once when the component mounts

  return (
    <div>
      <h2>Job Listings</h2>
      {/* Display loading state */}
      {loading && <p>Loading job listings...</p>}

      {/* Display error message if any */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Render job listings if available */}
      {!loading && jobs.length === 0 && <p>No job listings available.</p>}

      {!loading &&
        jobs.map((job) => (
          <div key={job.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))}
    </div>
  );
};

export default JobListings;
