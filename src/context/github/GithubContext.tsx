import { ReactNode, createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { userProp } from "../../components/users/UserItem";

type GithubProviderType = {
  children : ReactNode
}

type GithubContextType = {
  clearUsers: ()=> void,
  fetchUsers : (text: string) =>  Promise<void>,
  isLoading: boolean,
  users: userProp[]
}

const GithubContext = createContext<GithubContextType | undefined>(undefined)

const GİTHUB_URL = import.meta.env.VITE_URL
const GİTHUB_TOKEN = import.meta.env.VITE_TOKEN


export const GithubProvider = ({children}:GithubProviderType) => {

  const initialState  = {
    users: [],
    isLoading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get Initial  Users (testing purposes)
  const fetchUsers = async(text: string) => {
    setLoading()

    const params = new URLSearchParams({q: text})

    const response = await fetch(`${GİTHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization : `token ${GİTHUB_TOKEN}`
      }
    })
    const {items} = await response.json()
    dispatch({
      type : 'GET_USERS',
      payload : items
    })
  } 

  const clearUsers = () => dispatch({type:'CLEAR_USERS'})

  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return <GithubContext.Provider value={{
    users : state.users,
    isLoading: state.isLoading,
    fetchUsers,
    clearUsers
    }}>
      {children}  
  </GithubContext.Provider>
}


export default GithubContext