import { createStore,combineReducers } from "redux";
import NoteReducer from "./notes/notesReducer"

const rootReducer=combineReducers({
    NoteReducer
})

const store  = createStore(rootReducer)

export default store; 