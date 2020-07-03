import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../Cards/JobCard";
import JoblyApi from "../../Helpers/JoblyApi";

function Company() {
    const { handle } = useParams();

    const [company, setCompany] = useState();

    useEffect(() => {
        async function getJobs() {
            let company = await JoblyApi.getCompany(handle);
            
            setCompany(company);
            console.log(company)
        }
        getJobs();
    }, [handle]);

    if (!company) {
        return <div>Loading...</div>;
    }

    return (
        <div className="col-md-8">
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            {company.jobs.map((job) => (
                <JobCard item={job} key={job.id}/>
            ))}
        </div>
    );
}

export default Company;
