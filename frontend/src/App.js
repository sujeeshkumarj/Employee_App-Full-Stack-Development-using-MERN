// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserView from './Components/UserView';
import AddEmployee from './Components/AddEmployee';
import AdminView from './Components/AdminView';
import AdminUpdate from './Components/AdminUpdate';
import AdminDelete from './Components/AdminDelete';
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
          <Route path='/adminview' exact element = {<AdminView/>}/>
          <Route path='/adminupdate' exact element = {<AdminUpdate/>}/>
          <Route path='/admindelete' exact element = {<AdminDelete/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;