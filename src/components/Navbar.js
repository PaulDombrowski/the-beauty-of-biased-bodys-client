import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
 
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);   // <== ADD
 
  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/add-picture">
        <button>Add picture</button>
      </Link>

      <Link to="/pictures">
        <button>List of all pictures</button>
      </Link>

      <Link to="/GetAShirt">
        <button>Get a shirt</button>
      </Link>
      
      <Link to="/comparepictures">
        <button>Compare Pictures</button>
      </Link>

 
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>        
          <button>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
          
        </>
      )}
    </nav>
  );
}
 
export default Navbar;
 