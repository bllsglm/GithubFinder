
type actionType = {
  type : string,
  payload? : any
}

const AlertReducer = (state,action:actionType) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return null
  
    default:
      return state;
  }
}

export default AlertReducer