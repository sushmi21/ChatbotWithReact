export const addMessage = message => {
  return {
    type: "ADDMESSAGE",
    payload: message
  };
};
