const initialState = 0;

const changeTheNumber = (state = initialState, action) => {  //   it will take two arguments    state & action
    switch (action.type) {  
        case 'INCREMENT': return state + 1;    // switch me action ki type increm ho tw +1 or decre ho tw -1 or export krdia 
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

export default changeTheNumber;
  // redux ka 1 varib create krlo initialSate taky koe problem create na ho


  // reducer ki help sy btaaya us action ko perform kaise krna ha 