import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState('');
  return (
    <div className="search-section">
      Search for your favorite TV shows
      <div className="search-input">
        <input className="search-box" type="text" placeholder="Search Your Shows" onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn-search" onClick={()=> props.handleOnSearch(search)}>Search</button>
        
      </div>
    </div>
  );
}

export default Search;