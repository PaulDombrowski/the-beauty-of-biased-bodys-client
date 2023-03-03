import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/allPictures')
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);




  return (
    <div>
      <table>
        <tbody>
          {pictures.map(row => (
            <tr key={row._id}>
            <Link to={`details/${row._id}`}>
              <td>{row.source}</td>
              <td>{row.title}</td>
              <td>{row.prompt}</td>
              <td>{row.createdAt}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPictures;
