import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import faster from './images/faster.jpg';
import loo from './images/loo.jpg';
import R from './images/R.jpg';
import "../components/style.css";





const StarRating = () => {
    const [rating, setRating  ] = useState(null)
    const [hover, setHover ] = useState(null)





    return(
        <div>
<h1> Title : FasteR </h1>
        <p>DESCRIPTION : this movie is about someone who has escaped the prison to revenge his brother's death in set up by a small gangster trying to steal the money by the one who has escaped the prisonand his brother and two other persons. the process of the vengence was killing this little crew one by one by the champion character which is dwayne johnson who was the hero of the movie .</p>

        <p> Poster Url : https://w123moviesfree.net/movie/faster </p>
            <img src={faster} alt=""/>



        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}

<h2> Title : Fast And FuriouS 6</h2>
        <p> DESCRIPTION : this one is a peace of work the shooting of the movie was in london where all legends have meet like dwayne johnson paul walker vin diesel ludacris it's about a family composed of 7 persons start stealing money cars and then they ending up working for the goverment helping hobs a brave agent in catching a team 7 persons also trying to stop them from stealing the component and other few big things and surrender them to the goverment . a suicide mission lead by vin diesel and dwayne johnson .</p> 
        
        <p>Poster Url : https://ww22.123movies.ski/movie/fast-and-furious-6-52977   </p>
        <img src={loo} alt=""/>


        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}
<h3> Title : Before We Go </h3>
        <p> DESCRIPTION : this great work is about two great characters which are chris evans and alice eve it s about one night that changed both lives chris and alice they meat in station of train chris was trying to help alice and the night begun until they start falling in love till the end of the movie don't miss all the fun in before we go .</p>
        
        <p>Poster Url : https://test.gomoviess.cyou/movie/before-we-go</p>
        
        <img src={R} alt=""/>
        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}

        
        </div>
    )


    }

export default StarRating