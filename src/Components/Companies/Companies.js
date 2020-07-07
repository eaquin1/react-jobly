import React, { useEffect, useState } from "react";
import JoblyApi from "../../Helpers/JoblyApi";
import CompanyCard from "../Cards/CompanyCard";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Companies() {
    const [companies, setCompanies] = useState([]);
    
    useEffect(() => {
        async function getCompanies() {
            let c = await JoblyApi.getCompanies();
            setCompanies(c);
        }
        getCompanies();
    }, []);

    async function handleSearch(search) {
        let searchResults = await JoblyApi.getCompanies(search);
        setCompanies(searchResults);
    }

    if (!companies) {
        return <div>Loading...</div>;
    } 

    return companies.length === 0 ? (
        <div>
            Company not found. Please return back to 
             <Link to="/companies" onClick={() => handleSearch()}> Companies</Link>
        </div>
    ) : (
        <div>
            <Search endpoint="companies" searchFor={handleSearch} />
            {companies.map((company) => (
                <CompanyCard item={company} key={company.handle}/>
            ))}
        </div>
    );
}

export default Companies;
