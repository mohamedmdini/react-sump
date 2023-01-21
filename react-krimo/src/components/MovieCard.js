import React, { Component, useMemo, useState } from "react";
import proptypes from 'prop-types';
import {fontAwesomeIcon} from ' @fortawesome/react-fontawesome';
import { hover } from "@testing-library/user-event/dist/hover";





const rate = ({count, rating, color, onRating}) => {
const [ hoverRating, SetHoverRating] = useState(0) ; 
const getcolor = index => {
    if( hoverRating >= index){return color.filled;} else if(!hoverRating && rate>= index)
        
    { return color.filled;}
    return color.unfilled;

}





    const starRating = useMemo (()=>{
        return Array (count)
        .fill(0)
        .map ((_, 1) => i + 1)
        .map((idx) => (
            
            <fontAwesomeIcon
            key ={idx}
            classname= "cursor-pointer"
            icon="star"
            onClick ={() => onRating(idx)}
            style={{ color: getcolor(idx)}}
            onMouseEnter={() => SetHoverRating(idx)}
            onMouseleave={() => SetHoverRating(0)}
            />
            ));
    }  [count,rating,hoverRating]);

    return(
        <div>
(starRating)
        </div>
    )
}; 

rate.prototype ={
    count:proptypes.number,
    rating:proptypes.number,
    onchange:proptypes.func,
    color:{
        filled : proptypes.string,
        unfilled: proptypes.string,
    }
        
    
    

}

rate.defaultprops= {
    count: 5,
    rating : 0,
    color : {
        filled : " #f5eb3",
        unfilled: " DCDCDC",

    }

}
export default rate;

