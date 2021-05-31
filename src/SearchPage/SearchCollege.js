import React, { useState } from "react";
import '../SearchPage/Search.css';
import Menu from '../TabMenu/Menu';

const SearchCollege=()=>
{

    const [searchTerm,setSearchTerm]=useState("");
    return(
        <>
        <div className="searchbar">
        <input type="text" placeholder=" 👉 Search Your College" 
        
        onChange={(event)=>{setSearchTerm(event.target.value)}}/>
      </div>

    {
            Menu.filter((val)=>{
        if(searchTerm=="")
        {
            return val;
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
            return val;
        }

            }).map((val,key)=>{
              
                {/* starting */}
                return(
                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                    {/* for Image */}
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                            <img src={val.image} alt="menuPic" className="img-fluid" />
                        </div>
                        {/* menu Item discription */}
                        <div className="col-12-col-md-12 col-lg-8">
                            <div className="main-title pt-4 pb-3">
                                <h1>{val.name}</h1>
                                <p>{val.description}</p>
                            </div>
                            <div className="menu-price-book">
                                <div className="price-book-divide d-flex justify-content-between">
                                    <h2>Fees:{val.fees}</h2>
                                    <a href="#">
                                    <button className="btn btn-primary">Know More</button>
                                    </a>
                                </div>
                                <p>Prices may vary on selected data.</p>
                            </div>
                        </div>
                
                    </div>
                
                </div>
                )
                {/* ending */}
                
            })
        }
       
       </>
        
    )
};
export default SearchCollege;