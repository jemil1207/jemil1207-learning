import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';
import Home from './Home.js';
import {BrowserRouter as Router,Route,Link,useLocation,Routes} from "react-router-dom"

import Location1 from './Location.js';
function App() {
  const isAuthorized=true;
  const location2 = useLocation();
  console.log(location2);
  return (
   <div> 
    <Router>
        <Link to={"/Location"}>loc</Link>
      <Routes>

        {
        <Route path="/" element={isAuthorized?<Profile/>:<Home/>}/>}
        
          <Route path='/Location' element={<Location1/>}></Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
 