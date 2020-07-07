import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
function Search({ searchFor }) {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFor(search);
    };
    return (
        <div style={{marginLeft: "40px"}}>
           
                <Form onSubmit={handleSubmit} inline>
                    <Input
                        name="search"
                        placeholder="Enter a search term"
                        value={search}
                        onChange={handleChange}
                    />
                    <Button>Submit</Button>
                </Form>
            
        </div>
    );
}

export default Search;
