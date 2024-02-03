import { userProp } from "../../components/users/UserItem"

type stateType = {
  users: userProp[],
  isLoading: boolean
}

type actionType = {
  type : string,
  payload? : any
}

const githubReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload, isLoading: false}
    case 'SET_LOADING':
      return {...state, isLoading: true}
    case 'CLEAR_USERS':
      return {...state, users: []}
    case 'GET_USER':
      return {...state, user: action.payload, isLoading: false}
    case 'GET_REPOS':
      return {...state, repos: action.payload, isLoading: false}
    default:
    return state
  }
}

export default githubReducer