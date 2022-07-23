import { createStore, combineReducers } from "redux";
import NoteReducer from "./notes/notesReducer"
import Selectereducer from "./notes/selectedReducer"
//(2)j'appelle la methode combinereducer et je lui transmet les information de mon state
const rootReducer = combineReducers({
    NoteReducer,
    Selectereducer
   

})
//(2)je passe l'information dans mon createStore 
const store = createStore(rootReducer)
// console.log(store.getState())
export default store; 