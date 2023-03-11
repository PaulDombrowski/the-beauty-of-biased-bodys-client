import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NFTs from "../components/NftGallery";
import MovingCircle from "../components/MovingText";
import HeadTitle from "../components/Header";

function AllPictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/allPictures')
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div><HeadTitle/>
    <div className="all-pictures">
    <h1>Buy an NFT and support the LGBT+ community</h1>
    
      <NFTs />
      <table className="picture-table">
        <tbody>
          {pictures.map(row => (
  <tr key={row._id} className="picture-row">
    <td className="picture-title"><Link to={`details/${row._id}`} className="picture-link">title: {row.title}</Link></td>
    <td className="picture-source">AI: {row.source}</td>
    <td className="picture-prompt">prompt in AI: {row.prompt}</td>
    <td className="picture-date">created in the database: {row.createdAt}</td>
  </tr>
))}
        </tbody>
      </table>
      <Link to="/login">Admin Login</Link>
      <Link to="/addpicture">Add pictures (Admin) </Link>
      
      <div><MovingCircle/></div>
    </div>
    </div>
  );
}

export default AllPictures;
