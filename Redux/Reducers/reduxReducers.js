const initialState = {
    total:0
}

const contactReducer = (state = initialState , action)=>{
    switch (action.type) {
      case "INC":
        state = { total: state.total - 1 };
        return state;
      case "DEC":
        state = { total: state.total + 1 };
        return state;
default:
  return state;
    }
}

export { contactReducer , initialState};