import model from "../resources/model.js";

export const SET_CURRENT_STATE = "SET_CURRENT_STATE";
export const INITIATE_CONVERSATION = "INITIATE_CONVERSATION";

function setCurrentState(newState, value) {
  return {
    type: SET_CURRENT_STATE,
    status: newState,
    value: value
  };
}

function initiateConversation() {
  return {
    type: INITIATE_CONVERSATION,
    status: "message",
    value: 1
  };
}



export default {
  setCurrentState,
  initiateConversation
};