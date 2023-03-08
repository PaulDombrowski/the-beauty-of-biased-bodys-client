import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PictureDetails from "./Detailsview";

function AddPicturesPage(props) {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([])

  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

 //get pictures for our list//
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/allPictures')
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);




  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    const fileListArr = Array.from(e.target.files)

    fileListArr.forEach((file) => {
      uploadData.append(`imageUrl`, file, file.name);
    })

    axios.post("http://localhost:5005/api/upload", uploadData)
      .then(response => {
        setImageUrls(response.data.imageUrls);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("URLS: ", imageUrls)
    for (let imageUrl of imageUrls) {
      const requestBody = { title, source, prompt, imageUrl }
    
      handleAxiosCall(requestBody)
    }
  }

  async function handleAxiosCall (requestBody) {
    try {
      const response = await axios.post("http://localhost:5005/api/pictures", requestBody)
      console.log("response: ", response)
    } catch (err) {
      console.log(err)
    } 
  }


  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5005/api/deletepicture/${id}`);
      // Wenn das Löschen erfolgreich war, aktualisieren Sie die Liste der Bilder
      const response = await axios.get("http://localhost:5005/api/allPictures");
      setPictures(response.data);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="AddPictureForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" onChange={handleFileUpload} multiple />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <select name="source" value={source} onChange={handleSourceChange}>
          <option value="" disabled selected hidden>
            Choose a source
          </option>
          <option value="DALL.E 2">DALL.E 2</option>
          <option value="DeepAI">DeepAI</option>
        </select>
        <select name="prompt" value={prompt} onChange={handlePromptChange}>
          <option value="" disabled selected hidden>
            Choose a prompt
          </option>
          <option value="woman">woman</option>
          <option value="lesbian">lesbian</option>
          <option value="man">man</option>
          <option value="gay man">gay man</option>
          <option value="trans woman">trans woman</option>
          <option value="trans man">trans man</option>
          <option value="femininity">femininity</option>
          <option value="masculinity">masculinity</option>
          <option value="straight woman">straight woman</option>
          <option value="straight man">straight man</option>
          <option value="pupil">pupil</option>
           <option value="couple">couple</option>
        </select>
        <button type="submit">Add pictures</button>
      </form>


      <div>
      <table>
        <tbody>
          {user ? <>{pictures.map(row => (
            <tr key={row._id}>
            <Link to={`details/${row._id}`}>
              <td>{row.source}</td>
              <td>{row.title}</td>
              <td>{row.prompt}</td>
              <td>{row.createdAt}</td>
              </Link>
              <td>
               <button onClick={() => handleDelete(row._id)}>Delete</button>
             </td>
            </tr>
          ))}</> : <>you need to log in</>}
        </tbody>
      </table>
    </div>

            





    </div>

 

  );
}

export default AddPicturesPage;