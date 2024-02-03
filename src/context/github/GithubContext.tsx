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
  users: userProp[],
  user:any,
  getUser : (login: string) => Promise<void>,
  repos: any,
  getUserRepos : (login: string) => Promise<void>,
}

const GithubContext = createContext<GithubContextType | undefined>(undefined)

const GİTHUB_URL = import.meta.env.VITE_URL
const GİTHUB_TOKEN = import.meta.env.VITE_TOKEN


export const GithubProvider = ({children}:GithubProviderType) => {

  const initialState  = {
    users: [],
    user:{},
    repos:[],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get Initial  Users (testing purposes)
  const fetchUsers = async(text: string) => {
    setLoading()

    const params = new URLSearchParams({q: text})

    const response = await fetch(`${GİTHUB_URL}/search/users?${params}`, {headers: {Authorization : `token ${GİTHUB_TOKEN}`}})
    const {items} = await response.json()
    dispatch({
      type : 'GET_USERS',
      payload : items
    })
  } 

  // Get single user
  const getUser = async(login: string) => {
    setLoading()

    const response = await fetch(`${GİTHUB_URL}/users/${login}`,  {headers: {Authorization : `token ${GİTHUB_TOKEN}`}})
    
    if(response.status === 404) {
      window.location = '/notfound'
     }else{
      const data = await response.json()
  
      dispatch({
        type : 'GET_USER',
        payload : data
      })
     }
  } 

  // Get User repos
  const getUserRepos = async(login: string) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10'
    })


    const response = await fetch(`${GİTHUB_URL}/users/${login}/repos?${params}`, {headers: {Authorization : `token ${GİTHUB_TOKEN}`}})
    const data = await response.json()
    dispatch({
      type : 'GET_REPOS',
      payload : data
    })
  } 
  

  const clearUsers = () => dispatch({type:'CLEAR_USERS'})

  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return <GithubContext.Provider value={{
    users : state.users,
    isLoading: state.isLoading,
    user : state.user, 
    getUser,
    fetchUsers,
    clearUsers,
    repos: state.repos,
    getUserRepos,
    }}>
      {children}  
  </GithubContext.Provider>
}


export default GithubContext