import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListeNotes from "./Components/ListNotes/ListeNotes";
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom"
function App() {
  return (
    <Router>
     <Sidebar/>
     <Switch>
        <Route path="/" exact component={ListeNotes}/>
        
        <Route path="/edit" exact component={MainArea}/>
     </Switch>
    </Router>
  );
}

export default App;
