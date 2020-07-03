import React, {useState} from "react"

function Search({searchFor}) {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchFor(search)
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                placeholder="Enter a search term"
                value={search} 
                onChange={handleChange}
            />
            <button>Submit</button>

        </form>
    </div>
)
}


export default Search