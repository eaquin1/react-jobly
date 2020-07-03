import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import JoblyApi from "../../Helpers/JoblyApi";
import JobCard from "../Cards/JobCard";
import { Link } from "react-router-dom";

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJs() {
            let j = await JoblyApi.getJobs();
            setJobs(j);
        }
        getJs();
    }, []);

    async function handleSearch(search) {
        let searchResults = await JoblyApi.getJobs(search);
        setJobs(searchResults);
    }

    if (!jobs) {
        return <div>Loading...</div>;
    }

    return jobs.length === 0 ? (
        <div>
            Job was not found. Please return back to
            <Link to="/jobs" onClick={() => handleSearch()}>
                {" "}
                Jobs{" "}
            </Link>
        </div>
    ) : (
        <div>
            <Search endpoint="jobs" searchFor={handleSearch} />
            {jobs.map((job) => (
                <JobCard item={job} key={job.id} />
            ))}
        </div>
    );
}

export default Jobs;
