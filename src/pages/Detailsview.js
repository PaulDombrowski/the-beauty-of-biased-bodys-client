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
    return <div>Not found</div>;
  }

  return (
    <div>
      <h2>{picture.title}</h2>
      <img src={picture.source} alt={picture.title} />
      <p>{picture.prompt}</p>
      <p>Created at: {picture.createdAt}</p>
    </div>
  );
}

export default PictureDetails;