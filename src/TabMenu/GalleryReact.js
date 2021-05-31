import React, { useState } from 'react';
import "../TabMenu/tab.css";
import Menu from "./Menu";
const GalleryReact=()=>{
    const [items,setItems]=useState(Menu);

    const filterItem=(categItem)=>{
        const updatedItems=Menu.filter((curElem)=>
        {
            return curElem.category===categItem;
        })
        setItems(updatedItems);
    }

    return (
        <>
        <h1 className="mt-5 text-center main-heading">Choose Colleges Stream Wise 👇</h1>
        <hr/>

        <div className="menu-tabs container-fluid ">
        <div className="menu-tab d-flex justify-content-around">
        <button className="btn btn-warning" onClick={()=>filterItem('management')}>Management</button>
        <button className="btn btn-warning" onClick={()=>filterItem('engineering')}>Engineering</button>
        <button className="btn btn-warning" onClick={()=>filterItem('commerce')}>Commerce</button>
        <button className="btn btn-warning" onClick={()=>filterItem('medical')}>Medical</button>
        <button className="btn btn-warning" onClick={()=>filterItem('law')}>Law</button>
        <button className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button>
        </div>

        </div>
        {/* my main items section */}
        <div className="menu-items container-fluid mt-5">
        <div className="row">
        <div className="col-11 mx-auto">
            <div className="row my-5">

           {
              items.map((elem)=>
              {
                  
                  const {id,name,image,description,fees}=elem;
                  return (
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                    {/* for Image */}
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                            <img src={image} alt="menuPic" className="img-fluid" />
                        </div>
                        {/* menu Item discription */}
                        <div className="col-12-col-md-12 col-lg-8">
                            <div className="main-title pt-4 pb-3">
                                <h1>{name}</h1>
                                <p>{description}</p>
                            </div>
                            <div className="menu-price-book">
                                <div className="price-book-divide d-flex justify-content-between">
                                    <h2>Fees:{fees}</h2>
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
              })  
           }

                
            </div>
        </div>

        </div>

        </div>
        </>
    )
}

export default GalleryReact;