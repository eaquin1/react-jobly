import React, {useEffect, useState } from "react"
import JoblyApi from "../../Helpers/JoblyApi";
import CompanyCard from "../Cards/CompanyCard"
function Companies() {
const [companies, setCompanies] = useState();

useEffect(() => {
    async function getCompanies() {

     let c = await JoblyApi.getCompanies();
     setCompanies(c);
    }
    getCompanies()
}, [])

if (!companies) {
    return <div>Loading...</div>
}
    return (
        <div>
        <h1>Companies</h1>
        {companies.map((company) => (
            <CompanyCard item={company} />
        ))}
    </div>
    )
}

export default Companies