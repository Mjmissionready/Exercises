import { Link } from 'react-router-dom';
import "./App.css";

function Home() {
  return (
    <div>
      <div> This is Homepage</div>
      <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Home;