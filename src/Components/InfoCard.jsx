import React from 'react'
import bgimg from "../assets/bground.png"
import prsn from "../assets/picture.png"
import "./InfoCard.css"

const InfoCard = () => {
  return (
   
     <div className='card card-extra-style'  >
        
        <div  >
           <img className='bg-image' src={bgimg} />
        </div>
        <div >
         <img className='pic' src={prsn} /> 
        </div>
        <div  className='about' >
           <h4 className='name'> <br/>Chet Faker<br/></h4>
            @chetfaker<br/>
            "I like the way you work it <br/>
             No diggity <br/>
             I wanna bag it up"<br/>
             
        </div>
   </div>
    
    
    );
};

export default InfoCard;
