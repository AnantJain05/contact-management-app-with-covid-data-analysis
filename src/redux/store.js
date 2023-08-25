import StateLoader from "./stateloader"
import { createStore } from "redux";
import userReducer from "./users/userReducer";

const stateLoader = new StateLoader();

let store = createStore(userReducer, stateLoader.loadState());

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

export default store