import { useState } from "react";

var data = require("./mohamed.json");


export default function App (){

const[value, setvalue] = useState('');
const onChange = (event) => {
    setvalue(event.target.value);
}
const onSearch =(SearchTerm) => {
    setvalue(SearchTerm);
    // our api to fetch the search result 
    console.log('Search', SearchTerm);
}
    return(
        <div className="App">
            <h1>Search </h1>
            <div className="Search-container">
                <div className="search-inner">
<input type="text" value={value} onChange = {onChange} />
<button onClick={()=>onSearch(value)}> Search</button>
<div className="dropdown">
    {data.filter(=>{
const SearchTerm = value.tolowerCase();
const movietitle = item . movie_title.tolowerCase();
return  searchTerm && movietitle.startWith(SearchTerm)
    })
    .map}((item) => (
        <div  onClick={()=>onSearch(item.movie_title) }    
        className="dropdown-row"
        >
            {item.movie_title}

        </div>
        ))

</div>
                </div>
            </div>
        </div>
    );
}