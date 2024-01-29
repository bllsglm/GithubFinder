import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div >
      <h1 className="text-6xl mb-1">Oops!</h1>
      <p className="my-2">Sorry, the page you are looking for does not exist.</p>
      <p>
         <Link to="/" className='btn btn-outline'>Back to Home<FaHome className='inline pl-1 text-lg'/></Link>
      </p>
  </div>
  )
}

export default NotFound