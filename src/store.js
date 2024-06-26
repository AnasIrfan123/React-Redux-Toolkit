// or root reducer ko store me rakhna ha

import { createStore } from 'redux';

import rootReducer from "./reducers/index";


const store = createStore(rootReducer);

export default store;


// rootReducer me applica ka sray reducer hn usko simplely createstore me store kia ha or ( store ) ' global centralized '
// state ha jo bh excess krlega usko sra data available ho jayega 


// main file index.js me store ko provider ki help sy store k all dta include kia 