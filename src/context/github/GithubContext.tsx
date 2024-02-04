import { ReactNode, createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { userProp } from "../../components/users/UserItem";
import { actionType, UserType, RepoType } from "./GithubReducer";

type GithubProviderType = {
  children : ReactNode
}

type GithubContextType = {

  isLoading: boolean,
  users: userProp[],
  user?:UserType,
  repos?: RepoType[],
  dispatch: React.Dispatch<actionType>
}

const GithubContext = createContext<GithubContextType | undefined>(undefined)

export const GithubProvider = ({children}:GithubProviderType) => {

  const initialState  = {
    users: [],
    user:{},
    repos:[],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    }}>
      {children}  
  </GithubContext.Provider>
}


export default GithubContext
