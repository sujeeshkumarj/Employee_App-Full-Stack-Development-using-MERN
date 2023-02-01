// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserView from './Components/UserView';
import AddEmployee from './Components/AddEmployee';
import Admin from './Components/Admin';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/home' exact element = {<Home/>}/>
          <Route path='/login' exact element = {<Login/>}/>
          <Route path='/signup' exact element = {<Signup/>}/>
          <Route path='/userview' exact element = {<UserView/>}/>
          <Route path='/addemployee' exact element = {<AddEmployee/>}/>
          <Route path='/admin' exact element = {<Admin/>}/>
          <Route path='/adminlogin' exact element = {<AdminLogin/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
