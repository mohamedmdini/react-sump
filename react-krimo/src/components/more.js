
import "./App.css";
import head from './images/head.jpeg'
import React ,{Component} from "react";



class Filter extends Component{
    constructor(){
        super();
        this.state={
        data: " TYPE YOUR FAVOURITE MOVIE AND CLICK ADD MOVIE TO WATCH IT "
        
        }
        
    }
    updateData(){
        this.setState({data:"Congratulation Your Movie Has Been Added Successfully"})
        alert('YOUR DEMANDE IS BEING PROCESSED CLICK OK TO SEE THE CHANGE  ')
    
    }
    render(){
        return(
        <div className="App">
            <img src={head} alt="" /> 
    
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.updateData()}> ADD A MOVIE </button>
            
        </div>
        
        )
        
    }


    
}
export default Filter;