/* eslint-disable @typescript-eslint/no-explicit-any */
import { userProp } from "../../components/users/UserItem"

export type RepoType = {
  [key:string] : any
};

export type UserType = {
  [key: string] : any
};

type stateType = {
  users: userProp[],
  isLoading: boolean
}

export type actionType =
  | { type: 'GET_USERS'; payload: userProp[] }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_USERS' }
  | { type: 'GET_USER_AND_REPOS'; payload: { user: UserType; repos: RepoType[] } };

const githubReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload, isLoading: false}
    case 'SET_LOADING':
      return {...state, isLoading: true}
    case 'CLEAR_USERS':
      return {...state, users: []}
    case 'GET_USER_AND_REPOS':
      return {...state, repos: action.payload.repos, user:action.payload.user  ,isLoading: false}  
    default:
    return state
  }
}

export default githubReducer