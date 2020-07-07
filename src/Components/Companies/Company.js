import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../Cards/JobCard";
import JoblyApi from "../../Helpers/JoblyApi";
import UserContext from "../../UserContext"

function Company() {
    const { handle } = useParams();
    const {currentUser} = useContext(UserContext) 
    const [company, setCompany] = useState();
   

    useEffect(() => {
        async function getJobsAndCompany() {
            let company = await JoblyApi.getCompany(handle);
            const {jobs} = currentUser;
            const jobIDsAppliedTo = new Set(jobs.map((job)=> job.id))

            company.jobs = company.jobs.map((job) => ({
                ...job,
                state: jobIDsAppliedTo.has(job.id) ? 'applied' : null
            }))
console.log(currentUser)
            setCompany(company);
         
        }
        getJobsAndCompany();
    }, [handle, currentUser]);


   async function apply(idx) {
        if (company && Array.isArray(company.jobs) && idx < company.jobs.length){
            let jobId = company.jobs[idx].id;
            console.log(jobId)
            let message = await JoblyApi.applyToJob(jobId);
console.log(message)
            setCompany((c) => {
                let newCompany = { ...c };
                newCompany.jobs = newCompany.jobs.map((job) => 
                job.id === jobId ? { ...job, state: message} : job            
                );
                return newCompany
            })       
        }
    }
    if (!company) {
        return <div>Loading...</div>;
    }

    return (
        <div className="col-md-8">
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            {company.jobs.map((job, idx) => (
                <JobCard key={idx} idx={idx} handleApply={() => apply(idx)} item={job} />
            ))}
        </div>
    );
}

export default Company;
