import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovingCircle from '../components/MovingText';
import HeadTitle from '../components/Header';

function PictureDetails() {
  const [picture, setPicture] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5005/api/pictures/${id}`)
      .then(response => setPicture(response.data))
      .catch(error => console.log(error));   
  }, [id]);

  if (!picture) {
    return <div>Picture not found</div>;
  }

  return (
    <div><HeadTitle/>
    <div className='detailsview'>
    <div className="picture-details">
      <img src={picture.imageUrl} alt="not found" />
      <h2>title in the database:  {picture.title}</h2>
      <p>AI prompt: {picture.source}</p>
      <p>AI prompt: {picture.prompt}</p>
      <p>Added to the database: {picture.createdAt}</p>
    </div>
    <div><MovingCircle/></div>
     </div>
     </div>
  );
}

export default PictureDetails;
