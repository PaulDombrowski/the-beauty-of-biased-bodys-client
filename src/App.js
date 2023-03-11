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
import WomanLesbianFemininity from "./pages/CompareWomanLesbianFemininity";
import WomanTRansWomanFemininity from "./pages/CompareWomanTransWomanFemininity";
import ManTransManMasculinity from "./pages/CompareManTransManMasculinity";
import ManGayMan from "./pages/CompareManGayman";
import WomanLesbian from "./pages/CompareWomanLesbian";
import MasculinityFemininity from "./pages/CompareMasculinityAndFemininity";
import PupilCouple from "./pages/CampareGenderlessPrompts";
import NftCollection from "./components/NftGallery";
import VideoBox from "./pages/Home";
import GetRandom from "./pages/GetRandomPicture";


function App() {
  return (
    <div className="App">

  {/* <Navbar /> */}

    <Routes>      
        {/* <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} /> */}
        <Route path="/" element={<VideoBox/>}/>
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/addpicture" element={<AddPicturesPage />} />
        <Route path="/pictures" element={<AllPictures />} />
        <Route path="/pictures/details/:id" element={<DetailsView />}/>
        <Route path="/GetAShirt" element={<BuyShirt />}/>
        <Route path="/deletepicture/:id" element={<DetailsView />}/>
        <Route path="/comparepictures/" element={<CompareCategories />}/>
        <Route path="/WomanLesbianFemininity" element={<WomanLesbianFemininity />}/>
        <Route path="/WomanTRansWomanFemininity" element={<WomanTRansWomanFemininity />}/>
        <Route path="/ManTransManMasculinity" element={<ManTransManMasculinity />}/>
        <Route path="/ManGayMan" element={<ManGayMan />}/>
        <Route path="/WomanLesbian" element={<WomanLesbian />}/>
        <Route path="/FemininityAndMasculinity" element={<MasculinityFemininity />}/>
        <Route path="/PupilCouple" element={<PupilCouple />}/>
        <Route path="/NftGallery" element={<NftCollection/>}/>
        <Route path="/" element={<VideoBox/>}/>
        <Route path="/getrandom" element={<GetRandom/>}/>





        
        



        


      

    </Routes>

    </div>
  );
}

export default App;

