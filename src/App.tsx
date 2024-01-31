import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';


function App() {
  

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className="container mx-auto px-3 pb-12"> 
        <Alert/>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
