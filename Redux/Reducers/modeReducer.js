const mode = {
    type:"dark"
};

const modeReducer = (state = mode , action)=>{
    switch (action.type) {
      case "DARK":
        state = { type: "dark" };
        return state;
      case "LIGHT":
        state = { type: "light" };
        return state;

      default:
    return state;
    }
}
export {mode , modeReducer};