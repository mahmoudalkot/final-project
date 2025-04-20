import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try { 
        const response = await fetch('https://fakestoreapi.com/products');
        const Products = await response.json();
        console.log(Products);
        setData(Products);

      } catch (error) {
        console.error("error" , error);
        setError(error);
      }
    };
    getProducts();
    // const response = axios.request('http://localhost:3000/users');
    // setData(Products);
  }, []); 

  return (
    <div className="container py-5">
      <h1 className='text-center mb-5 '>our products</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 g-4 ">

      {data.map((product) => (
        <div className="col" key={product.id}>
          <div className='card h-100 shadow-sm'>
            <div className='bg-light d-flex justify-content-center align-items-center p-3' style={{height : "300px"}}>
              <img
              src={product.image}
              alt={product.title}
              className='card-img-top'
              style={{
                maxHeight: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />

            </div>
                <div>
                <h5 className="card-title text-truncate">{product.title}</h5>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <h4 className='fw-bold mb-0'>${product.price}</h4>
                </div>
                </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}