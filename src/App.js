import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListeNotes from "./Components/ListNotes/ListeNotes";
import DisplayNote from "./Components/DisplayNote/DisplayNote";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
     <Sidebar/>
     <Switch>
        <Route path="/" exact component={ListeNotes}/>
        <Route path="/displaynote/:id" exact component={DisplayNote}/>
        <Route path="/edit" exact component={MainArea}/>
     </Switch>
    </Router>
  );
}

export default App;
