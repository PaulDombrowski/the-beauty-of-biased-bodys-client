import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WomanLesbianFemininity = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    loadPictures();
  }, []);

  const loadPictures = async () => {
    try {
      const response = await axios.get('http://localhost:5005/api/allpictures');
      setPictures(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [pictureKey, setPictureKey] = useState(0);

  const shufflePictures = () => {
    setPictureKey(pictureKey + 1);
  };

  const getShuffledPictures = (prompt) => {
    const filteredPictures = pictures.filter((picture) => picture.prompt === prompt);
    return filteredPictures.sort(() => 0.5 - Math.random()).slice(0, 8);
  };

  const womanPictures = getShuffledPictures('woman');
  const femininityPictures = getShuffledPictures('femininity');
  const lesbianPictures = getShuffledPictures('lesbian');

  return (
    <>
      <h2>Woman</h2>
      <button onClick={() => shufflePictures()}>Shuffle</button>
      <div className="picture-list" key={`woman-${pictureKey}`}>
        {womanPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>prompt: {picture.prompt}</p>
            <p>AI: {picture.source}</p>
          </div>
        ))}
      </div>
      <h2>Femininity</h2>
      <div className="picture-list" key={`femininity-${pictureKey}`}>
        {femininityPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>prompt: {picture.prompt}</p>
            <p>AI: {picture.source}</p>
          </div>
        ))}
      </div>
      <h2>Lesbian</h2>
      <div className="picture-list" key={`lesbian-${pictureKey}`}>
        {lesbianPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>prompt: {picture.prompt}</p>
            <p>AI: {picture.source}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomanLesbianFemininity;