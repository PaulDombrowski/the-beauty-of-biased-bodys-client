import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddPicturesPage from "./pages/AddPictures"
import AllPictures from "./pages/PicturesList";
import DetailsView from "./pages/Detailsview"
import BuyShirt from "./pages/BuyShirt"
import CompareCategories from "./pages/CompareCategories"


function App() {
  return (
    <div className="App">

  <Navbar />

    <Routes>      
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/add-picture" element={<AddPicturesPage />} />
        <Route path="/pictures" element={<AllPictures />} />
        <Route path="/pictures/details/:id" element={<DetailsView />}/>
        <Route path="/GetAShirt" element={<BuyShirt />}/>
        <Route path="/deletepicture/:id" element={<DetailsView />}/>
        <Route path="/comparepictures/" element={<CompareCategories />}/>


      

    </Routes>

    </div>
  );
}

export default App;

