import React from 'react';
import './Homepg.css';
const Homepg=()=>{
    return(
        <>
        <div className="img-fluid">
         <div className='hero-container'>
         {/* <video sr="/videos/video-2.mp4" autoPlay loop muted/> */}
        
         <h1>Dream Your College</h1>
         <p>What are you waiting for?</p>
         <div className="hero-btns">
         <button className="btn btn-secondary">Get Started</button>
        
          <button className="btn btn-secondary" >Watch Trailor<i className='far fa-play-circle'/></button>

        
         </div>

         </div>
         </div>
       
        </>
    );
}
export default Homepg;