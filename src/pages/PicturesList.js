import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NFTs from "../components/NftGallery";

function AllPictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/allPictures')
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="all-pictures">
      <h3 className="minted-nfts">minted NFTs</h3>
      <NFTs className="nft-gallery" />
      <table className="picture-table">
        <tbody>
          <h3 className="database-items">all items in the database</h3>
          {pictures.map(row => (
            <tr key={row._id}>
              <Link to={`details/${row._id}`}>
                <td className="picture-title">title: {row.title}</td>
                <td className="picture-source">AI: {row.source}</td>
                <td className="picture-prompt">prompt in AI: {row.prompt}</td>
                <td className="picture-date">created in the database: {row.createdAt}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPictures;
