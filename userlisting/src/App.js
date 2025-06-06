import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import NavBar from './NavBar';
import User from './Users';
import UserDetails from './UserList'; 

const Home = () => {
  return(
    <div >
    <h2 style={{textAlign:"center", fontFamily:"sans-serif", fontSize:54, color:"rgb(17, 77, 166)",  marginTop:150}}>Welcome to homepage</h2>
    <h3 style={{textAlign:"center",fontFamily:"sans-serif", color:"rgb(17, 77, 166)",marginTop:'-10',fontSize:14}}>Navigate to view user list</h3>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/users" element={<User />} />
          <Route  path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
