
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
    // changeTheBackgroundTheme     // kal ko 1 or reducer create kia tw idhr is trhn ayega 
});
export default rootReducer;


// combinereducer sub ko combine krta ha or phr root me dlate hn 

// sirf 1 root reducer root ko lgta ha (  apko jitne reducer create krna ha karo lakin 1 he apka main reducer rahyga jis k andr all reducers 
// hongy wo jo main reducers hoga root reducer usko hm store me pass krdengy  )