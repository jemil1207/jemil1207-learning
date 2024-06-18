import logo from './logo.svg';
import './App.css';
import Params from "./components/params.js";
import Location from "./components/Location.js"
import {BrowserRouter as Router,Route,Link,useLocation,Routes} from "react-router-dom"
function App () {

 

  return (

    <div>
      <Router>

          <Link to="/page/1">page 1</Link><br></br>
          <button><Link to ="/page/2">page 2</Link><br></br></button>
          <Link to ="/page/3">page 3</Link>
          <div>Pathname:{Location.pathname}</div>

        <Routes>
          <Route path='/page/:id'element={<Params/>}></Route>
        </Routes>
        <Location/>
      </Router>
      
    </div>
    
  );
}

export default App;
