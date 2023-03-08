import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManTransManMasculinity = () => {
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

  const manPictures = getShuffledPictures('man');
  const transManPictures = getShuffledPictures('trans man');
  const masculinityPictures = getShuffledPictures('masculinity');

  return (
    <>
      <h2>Man</h2>
      <button onClick={() => shufflePictures()}>Shuffle</button>
      <div className="picture-list" key={`man-${pictureKey}`}>
        {manPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>{picture.title}</p>
          </div>
        ))}
      </div>
      <h2>Trans Man</h2>
      <div className="picture-list" key={`trans-man-${pictureKey}`}>
        {transManPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>{picture.title}</p>
          </div>
        ))}
      </div>
      <h2>Masculinity</h2>
      <div className="picture-list" key={`masculinity-${pictureKey}`}>
        {masculinityPictures.map((picture) => (
          <div key={picture._id} className="picture">
            <img src={picture.imageUrl} alt={picture.title} />
            <p>{picture.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManTransManMasculinity;