import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";

function App() {

  const [showName, setShowName] = useState([]);
  const [search, setSearch] = useState([]);
//waxaan u isticmaalay useEffect inuu ii sameeyo fetch data from API and rendered
  useEffect(()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((res)=> res.json())
    .then((data)=> setShowName(data))
  //waxaan ugu daray dependency array si aan u hubiyo that the useEffect marka uu dhaco dependency array change
  }, [showName]) 

  function addSearchedData(search){
    setSearch(search);
  }
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search handleOnSearch={addSearchedData}/>
        <div className="movies-section">
          {showName.map((show) => <MovieCard data={show}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;