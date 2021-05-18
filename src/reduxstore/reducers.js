const demo = (state={
  
}, action) => {
    switch (action.type) {
        case "SET_VIDEOS": {
            console.log("in reducers")
            state = { ...state };
           
            return state;
        }

        default: return state;
    }
}
    
export default demo;