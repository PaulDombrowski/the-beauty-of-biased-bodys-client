import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovingCircle from '../components/MovingText';
import HeadTitle from '../components/Header';

function RandomPicture() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    getRandomPicture();
  }, []);

  const getRandomPicture = () => {
    axios.get('http://localhost:5005/api/allpictures')
      .then(response => {
        const pictures = response.data;
        const randomIndex = Math.floor(Math.random() * pictures.length);
        setPicture(pictures[randomIndex]);
      })
      .catch(error => console.log(error));
  };

  const handleGetAnotherPicture = () => {
    getRandomPicture();
  };

  if (!picture) {
    return <div className='not-found'>Picture not found</div>;
  }

  return (
    <div><HeadTitle/>
    <div className='detailsview'> 
      <div className="picture-details">
        <img className="picture-details-image" src={picture.imageUrl} alt={picture.title} />
        <h2 className="picture-details-title">title: {picture.title}</h2>
        <p className="picture-details-source">AI prompt: {picture.source}</p>
        <p className="picture-details-prompt">AI prompt: {picture.prompt}</p>
        <p className="picture-details-date">Added to the database: {picture.createdAt}</p>
        <button className='button' onClick={handleGetAnotherPicture}>get another random picture</button>
      </div>
      <div>
        <MovingCircle/>
      </div>
    </div>
    </div>
  );
}

export default RandomPicture;