import { Component} from "react";
import "./App.css";
import MovieList from "./movielist";





class App extends Component {
    constructor(){
        super(); 
    this.state= {
        movies: [],
        showMovies: false,
        searchInput: "", 
    }
}

componentDidMount (){
    fetch (
        "https://my-json-server-typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
    .then((Response)=> Response.json())
    .then((apiMovies)=>
    this.setState(() => {
        return { movies: apiMovies, showMovies : true};
    }
    ));
}

SearchmoviesHandler = (Event) => {
    const search = Event.target.value.tolocaleowercase();
    this.setState(()=>{
        return{searchInput : search }

    });
}; 
render ( ) 
{
    let{ showMovies, searchInput, movies} = this.state; 
    const filteredMovies = movies.filter ((movie)=> {
        return movie.Title.tolocaleowercase().includes(searchInput);
    });
let renderMovies = "loading movies...";
if (showMovies) {
    renderMovies = (
        <MovieList movie = { filteredMovies} />
    );
}
return (
    <div className="App">
        <h1>search </h1>
    <input  
    type="search"
    placeholder="search movies "
    onChange ={ this.SearchmoviesHandler} />
    
    {renderMovies}
    </div>
);




} 


}


export default App;

