import React from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';  // incre par kia krna ha or decre par to is lye import kia 


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);  // is trhn store say data get krlia mne
  const dispatch = useDispatch();

  return (
    <>
    
       <div className='container'>

        <h1>Increment / Decrement counter</h1>
        <h4>using React and Redux</h4>

          <div className='quantity'>
            <a className='quantity_minus' title='Decrement'
            onClick={ () => dispatch(decNumber()) } ><span>-</span></a>

            <input name='quantity' type='text' className='quantity_input' value={myState} />

            <a className='quantity_plus' title='Increment'
           onClick={ () => dispatch(incNumber()) } ><span>+</span></a>
          </div>

       </div>
    </>
  )
}
// dispatch action ko triggar krta ha (hn mujhe ab yeh chhaye )  // payload
// useDispatch: Redux store ko actions bhejne ke liye.
// useSelector: Redux store se state ko access karne ke liye.

export default App;

// redux installation command => npm i redux react-redux

// agr redux nh chale to pakge version check out kkr lijye ga 

// --------------------------------------------------------------
// project k main index.js file me store ko import kia gya ha 

//ab mujhe current initial state chaye hoga value jb increment kare to 1 no add ho 







// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//   useSelector:
// useSelector hook kaam aata hai Redux store ki state se data access karne ke liye.
// Yeh hook aapko specific piece of state ko select karne ki ijazat deta hai. English wali Urdu mein iska matlab yeh
// hai ke yeh hook aapko Redux store se data nikalne mein madad karta hai. Aap is hook ko use karke specific state ko
// access kar sakte hain jo aapki application mein dikhana ya use karna hota hai.

//   useDispatch:
// useDispatch hook kaam aata hai Redux store ko actions bhejne ke liye. Iska matlab hai ke jab aapko store ko
// update karna hota hai ya koi action dispatch karna hota hai, toh aap useDispatch hook ka use karte hain. 
// English wali Urdu mein iska matlab yeh hai ke yeh hook aapko Redux store ko notify karne ke liye actions 
// bhejne mein madad karta hai taake store update ho sake.



// why Redux?

// react apki state management k kam ata ha ( ye apki state ko manage krne k kam ata ha 

// { hm parents sy child me data bhj sakte hn lakin child sy parent ko data pas nh kar sakte hn 

// IN REACT With PROP DRILLING
//                           prop driling ko is trhn solve kia 
// kyun k data last wali file me bhjna ha tw data phly sari files s hota hoa ayega is lye isko 

// In React Hooks  ( Context API, useContext )   => is trhn resolve kia 
//             react hooks sy context api or provider ki help sy consumer ko pas kia ja rha tha (main file app.js sy )
// --------------------------
// ap is kam ko REDUX say kaise solved kia gya ha 

//                 ||||


// How Redux Solve this Problem

// jis data ko pas krna ha usko redux k store me rakha hoga or jb pas krna hoga tw store ko call krdengy 

//    What is Redux?
// redux is a pattern library manageing application state, ( application state ko manage krne k lye use hota ha ) using events called actions. it serves
// centralized for state that needs acroess your entire aplication , state can only be updated in a predicatble
// ( 1 centralize store hota ha. redux apka main kam krta ha state ko manage krne k lye or  usko mange krne k lye 1 centralize store hota ha jis k andr application ka sara state hota ha )

//                  REDUX Main Topics
// 1 ACTION => what to do. kia krna ha action kehta ha 
// 2 REDUCER => how to do. reducer contains the hook action kis tareqy sy krna ha.
// 3 STORE => object which holds the state of the application. store k andr hamre sra hooks/data store rhn gy 

// 4 FUNCTION associated with Store.
//   creataStore()    store ko kaise create kren
//   dispatch(action)    action ko kasie trigger karen mujhe ye karwana ha falan krwana ha 
//   getState()      state ko get krne k lye state ki value kia ha 

//      1.Action pure Object
//  Actions are plain Javascript 'objects' that have a type field.
//  Actions only tell 'what to do', but they don't tell how to do.

// action 1 javscript ka obj ha jis ka name ha type (action what to do ye btaega ye kam krna ha lakin ye nh btaega krna kaise ha )
// action ko create kon kar rha ha 1 pure function ha javascript ka (pure funct which creates an action)

//      2.Reducer
//  Reducer are functions that take the 'current state' and an 'action' as a arguments, and return a 'new state' result.
 
// ye 1 macanism ha jo machine me ganna dal dega or jo juice nikla wo new state ha 

//      3.Store
//  the Redux store brings together the 'state actions, and reducers' that make up your app.

// state action or reducer sy he 1 app bnata ha single store in a redux application centralized single root reducer function.

//                           'REDUX' Principles
// 1 single source of truth.
// the global state of your application is stored as an object inside a single store.
// 2 State is Read-Only
// the only way to change the state to dispatch as action.
