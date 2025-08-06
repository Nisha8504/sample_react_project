import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const LinkProfile = () => {
  const [view, changeView] = useState([]);

  const fetchDataFromAPI = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        changeView(response.data);
      })
      .catch((error) => {
        console.error('API fetch error:', error);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row g-3">
          {view.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100">
                <img src={value.image} className="card-img-top" alt={value.title} />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description.slice(0, 100)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Category: {value.category}</li>
                  <li className="list-group-item">Price: ${value.price}</li>
                  <li className="list-group-item">ID: {value.id}</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkProfile;
