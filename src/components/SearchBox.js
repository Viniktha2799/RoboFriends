import React from "react";

const SearchBox = ({searchChange}) =>{
    return(
        <div>
            <input 
            className="pa3 ba grow br4 b--green bg-lightest-blue" 
            type="search" 
            placeholder="Enter a Robot Name"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;