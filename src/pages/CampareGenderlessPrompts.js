import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PupilCouple = () => {
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

  const pupilPictures = getShuffledPictures('pupil');
  const couplePictures = getShuffledPictures('couple');

  return (
    <>
      <h2>Pupil</h2>
      <button onClick={() => shufflePictures()}>Shuffle</button>
      <div className="picture-list" key={`pupil-${pictureKey}`}>
        {pupilPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.prompt} />
            <p>prompt: {picture.prompt}</p>
            <p>source: {picture.source}</p>
          </div>
        ))}
      </div>
      <h2>Couple</h2>
      <div className="picture-list" key={`couple-${pictureKey}`}>
        {couplePictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.prompt} />
            <p>prompt: {picture.prompt}</p>
            <p>source: {picture.source}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PupilCouple;
