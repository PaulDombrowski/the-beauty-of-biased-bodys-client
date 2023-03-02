import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddPicturesPage(props) {
  const [title, setTitle] = useState("")
  const [source, setSource] = useState("")
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const navigate = useNavigate()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSourceChange = (e) => {
    setSource(e.target.value)
  }

  const handlePromptChange = (e) => {
    console.log(e.target.value)
    setPrompt(e.target.value)
  }

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    axios.post("http://localhost:5005/api/upload", uploadData)
      .then(response => {
        console.log("response is", response)        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.data.imageUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const requestBody = { title, source, prompt, imageUrl }
    
      axios.post("http://localhost:5005/api/pictures", requestBody)
      .then(response => {
        navigate("/")
      })
      .catch(err => console.log(err)) 
  }

  return (
    <div className="AddMemePage">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange} />
        <select name="source" value={source} onChange={handleSourceChange} >
          <option value="" disabled selected hidden>Choose a source</option>
          <option value="DALL.E 2">DALL.E 2</option>
          <option value="DeepAI">DeepAI</option>

        </select>
        <select name="prompt" value={prompt} onChange={handlePromptChange} >
          <option value="" disabled selected hidden>Choose a prompt</option>
          <option value="woman">woman</option>
          <option value="lesbian">lesbian</option>
          <option value="man">man</option>
          <option value="gay man">gay man</option>
          <option value="trans woman">trans woman</option>
          <option value="trans man">trans man</option>
          <option value="femininity">femininity</option>
          <option value="masculinity">masculinity</option>
        </select>
        <button type="submit">Add picture</button>
      </form>
    </div>
  )
}

export default AddPicturesPage