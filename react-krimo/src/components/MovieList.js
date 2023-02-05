import {component} from 'react'; 



class MovieList extends component{
    render()
        {  <div>
            { this.props.movies.map((movie)=>{
                return(
                    <h2 key={movie.Title}>
                        {movie.Title}{}
                    </h2>
                );
            })}
        </div>}
}
export default MovieList; 
