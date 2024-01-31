import { ReactNode, createContext,useReducer } from "react";
import AlertReducer from './AlertReducer'

type ChildrenType = {
  children: ReactNode
}

type AlertContextType = {}


const AlertContext = createContext(undefined)

export const AlertProvider = ({children}: ChildrenType) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set alert 
  const setAlert = (msg:string, type:string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg , type },
    })

    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000);
  }

  return <AlertContext.Provider value={{alert: state, setAlert}}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext

