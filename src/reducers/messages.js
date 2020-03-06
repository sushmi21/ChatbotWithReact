// Reducer to add a mew message object to the array

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDMESSAGE":
      return state.concat(action.payload);
    default:
      return state;
  }
};
export default messagesReducer;
