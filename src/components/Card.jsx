  
 
 import React from 'react'
 import {Bookmark} from 'lucide-react'; 
 function Card(props) {
   return (
     
      <div className="card">
        
          <div className="top">
             
            <img src={props.logo} alt={props.compamy}/>
            <button>Save<Bookmark/></button>

          </div>
          
          <div className="centre">
            <h5>{props.company} <span>5days ago</span></h5>
             
              <h5> {props.role}</h5>
              <div className="head">
              <h7>Part time</h7>
              <h6>Senior Level</h6>
            </div>
          </div>
          <div className="bottom">
           <div className="naam">
              <h6>${props.price}</h6>
              <h6>Mumbai,India</h6></div> 

          <button>Apply now</button>
         
        </div>
      </div>
   )
 }
 
 export default Card;
 