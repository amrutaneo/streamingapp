import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Video from "./Video"

import { BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/video/:path" exact component={Video}/>
      </Router>
    </div>
  );
}

export default App;
