import { useState } from "react"
import rate from "../components/MovieCard";
import MovieCard from '../components/MovieCard';


const rating =() => {
const [rating,setrating]= useState(0);
const [rating2,setrating2]= useState(0);

const [rating3,setrating3]= useState(0);
    return(
        <>
        <header title="Star rating Page"/>
        <div className="row"> 
        <div className="col text-center">
            <h2>Rate Me</h2>
            <p>rating component</p>
        <MovieCard rating={rating} Onrating ={ (rate) => setrating(rate)} />
    <p>
            Rating - {rating} 
        </p>

        MovieCard rating={rating} Onrating ={ (rate) => setrating2(rate)} 
    <p>
            Rating - {rating2} 
        </p>
        MovieCard rating={rating} Onrating ={ (rate) => setrating3(rate)} 
    <p>
            Rating - {rating3} 
        </p>



        </div>
        </div>
        
        
            
        </>
    );
};


//color {{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default rate ; 