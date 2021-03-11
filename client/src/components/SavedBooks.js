import React from "react";
import NoSaved from "./NoSaved";
import Saved from "./Saved";

function SavedBooks () {
    return (
        <div className="bg-dark rounded p-4 mt-4">
            <h2 className="fs-2 text-white">Results</h2>
            <div >
                {/* Establish router or conditional */}
                <NoSaved />
                {/* dynamic result compnents, router or conditional, refer to employee directly for user cards */}
                {/* <Saved /> */}
            </div>
        </div>
)
}

export default SavedBooks;