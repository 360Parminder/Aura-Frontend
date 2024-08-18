
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Email from './Components/Signup/Email';
import InviteFriend from './Components/Signup/InviteFriend';
import Password from './Components/Signup/Password';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
  {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element={<Signup/>} >
      <Route index element={<Email/>} />
      <Route path='password' element={<Password/>}/>
      <Route path='inviteFriends' element={<InviteFriend/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
    </Routes>
  
  </BrowserRouter>
);
}

export default App;
