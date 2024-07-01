import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";


import Customcomp from "./Customcomp";
import ListComponent from "./Listitem";
import Service from "./Service";


function App() {
  return(
   <Router>
  <div className="App">
    <ul className="App-header">
      <li>
        <Link to = "/List">List</Link>
      </li>
      <li>
        <Link to = "/Custom">Custom</Link>
      </li>
      <li>
        <Link to = "/Service">Service</Link>
      </li>
    </ul>

    <Routes>
      <Route path= "/List" element = {<ListComponent/>}></Route>

      <Route path="/Custom" element = {<Customcomp/>}></Route>

      <Route path="/Service" element = {<Service/>}></Route>

    </Routes>
  </div>

   </Router>
  )
}

export default App;
