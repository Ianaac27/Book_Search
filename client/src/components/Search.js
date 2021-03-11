import React from "react";

function Search () {
    return (
        <div className="bg-info p-4">
            <h2 className="fs-2">Book Search</h2>
            <div >
                <form className="form-inline">
                    {/* <label className="filter-label mr-3" htmlFor="bookSearch">Search for Books:</label> */}
                    <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search Books" 
                    aria-label="Search" id="bookSearch"/>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
)
}

export default Search;