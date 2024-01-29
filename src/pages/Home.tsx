import UserResults from "../components/users/UserResults"

const token = import.meta.env.VITE_TOKEN
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <>
      <UserSearch/>
      <UserResults/>      
    </>
  )
}

export default Home