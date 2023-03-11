import axios from "axios";
import { useState, useEffect } from "react";
import HeadTitle from "../components/Header";
import MovingCircle from "../components/MovingText";
import ExpandableText from "../components/expandabletext";


function MyComponent() {
  // Erstellen Sie zwei State-Variablen, um die ausgewählten Kategorien zu speichern
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");

  // Erstellen Sie eine State-Variable, um alle Bilder zu speichern
  const [allPictures, setAllPictures] = useState([]);

  // Definieren Sie eine Funktion, die den Axios-Aufruf ausführt und die Antwort in der State-Variable speichert
  const getAllPictures = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/allpictures");
      setAllPictures(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Rufen Sie die Funktion getAllPictures auf, sobald die Komponente montiert wird
  useEffect(() => {
    getAllPictures();
  }, []);

  // Definieren Sie eine Funktion, die eine Liste von fünf zufälligen Bildern aus einer Kategorie zurückgibt
  const getRandomPictures = (category) => {
    // Filtern Sie alle Bilder nach der Kategorie
    const filteredPictures = allPictures.filter((picture) => picture.prompt === category);
    // Wählen Sie fünf zufällige Bilder aus der gefilterten Liste aus
    const randomPictures = filteredPictures.sort(() => 0.5 - Math.random()).slice(0, 5);
    return randomPictures;
  };

  return (
    <div> <HeadTitle/>
    <div className="bothdropdown">
    <select className="my-dropdown" value={category1} onChange={(e) => setCategory1(e.target.value)}>
      <option value="">--Show me five random pictures of:--</option>
        <option value="man">"man"   </option>
        <option value="gay man">"gay man"   </option>
        <option value="woman">"woman"</option>
        <option value="lesbian">"lesbian"</option>
        <option value="masculinity">"masculinity"</option>
        <option value="femininity">"femininity"</option>
        <option value="trans man">"trans man"</option>
        <option value="trans woman">"trans woman"</option>
        <option value="pupil">"pupil" (genderless)</option>
        <option value="couple"> "couple" (genderless)</option>
     
      </select>
      <select className="my-dropdown" value={category2} onChange={(e) => setCategory2(e.target.value)}>
      <option value="">--Show me 5 random pictures of:--</option>
        <option value="man">"man"   </option>
        <option value="gay man">"gay man"   </option>
        <option value="woman">"woman"</option>
        <option value="lesbian">"lesbian"</option>
        <option value="masculinity">"masculinity"</option>
        <option value="femininity">"femininity"</option>
        <option value="trans man">"trans man"</option>
        <option value="trans woman">"trans woman"</option>
        <option value="pupil">"pupil" (genderless)</option>
        <option value="couple"> "couple" (genderless)</option>
      </select>
      </div>

    <div className="my-container">
    
      
      <div className="whole-list">
      {category1 && (
       
        <div className="my-picture-list">
          <h2 className="my-picture-list-title">Category: {category1}</h2>
          {getRandomPictures(category1).map((picture) => (
            <img key={picture._id} src={picture.imageUrl} alt={picture.title} className="my-picture" />
          ))}
        </div>
        
      )}
      {category2 && (
       
        <div className="my-picture-list">
          <h2 className="my-picture-list-title">Category: {category2}</h2>
          {getRandomPictures(category2).map((picture) => (
            <img key={picture._id} src={picture.imageUrl} alt={picture.title} className="my-picture" />
          ))}
         
      
        </div>
      )}
      </div>
    </div>
    <div><MovingCircle/></div>
    </div>
  );
  
  
          }  

export default MyComponent;