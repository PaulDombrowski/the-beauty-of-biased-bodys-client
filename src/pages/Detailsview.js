import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    <div>
    <img src={picture.imageUrl} alt="not found" />
     <p>{picture.title}</p>
      <p>{picture.prompt}</p>
      <p>Created at: {picture.createdAt}</p>
    </div>
  );
}

export default PictureDetails;


