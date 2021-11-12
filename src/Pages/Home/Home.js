import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

import AllRating from '../../AllRating/AllRating';
const Home = () => {
    const [item,setItem]=useState([]);
    const [rating,setRating]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setItem(data));
    },[])
    useEffect(()=>
    {
        fetch('http://localhost:5000/rivew')
        .then(res=>res.json())
        .then(data=>setRating(data));
    },[])
    return (
        <div>
            
            {/* banner */}
            <div className="banner mb-5">
               
                   <div className="banner-text  pt-5">
                     <h3 className="text-center">Most Popular bicycle shop</h3>
                      <h5 className="text-center mt-3">“Life is like riding a bicycle. To keep your balance you must keep moving”
                    Albert Einstein (1879 – 1955), physicist who developed the general theory of relativity</h5>
                    <span className="d-flex justify-content-center mt-4">

                    <button className="btn">Explore more</button>
                    </span>
                   </div>
                

            </div>

            {/* services */}
            <div className="container">
                <div className="row row-cols-lg-3 row-cols-1">
                    {
                        item.slice(0,6).map(items=><Product items={items}></Product>)
                    }

                </div>
            </div>

            {/* rating */}
            <div className="container mt-5">
            <h3 className="allrating">users Rating</h3>
            <div className="row row-cols-lg-3 row-cols-1">
                {
                  rating.map(ratings=><AllRating ratings={ratings}></AllRating>)
                }
            </div>
            </div>
        
        </div>
    );
};

export default Home;