const initialState = {

};

export default function filter(state, action) {
  if(typeof state === "undefined") {
        state = initialState;
    }
    switch(action.type) {
        default:
          return state;
    }
}
