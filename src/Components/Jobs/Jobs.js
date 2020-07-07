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

    async function apply(idx) {
        let jobId = jobs[idx].id;
        let message = await JoblyApi.applyToJob(jobId);
        setJobs((j) => {
            j.map((job) =>
                job.id === jobId ? { ...job, state: message } : job
            );
        });
    }
    // if (!jobs) {
    //     return <div>Loading...</div>;
    // }

  let none =  
       (
        <div>
            Job was not found. Please return back to
            <Link to="/jobs" onClick={() => handleSearch()}>
                {" "}
                Jobs{" "}
            </Link>
        </div>)
   
   let found = jobs.map((job, idx) => (
    <JobCard
        item={job}
        key={idx}
        idx={idx}
        handleApply={() => apply(idx)}
    />
))

    return  (
        <div>
            <Search endpoint="jobs" searchFor={handleSearch} />
            <div>{jobs.length ? found : none} </div>
        </div>
    );
}

export default Jobs;
