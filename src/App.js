
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Email from './Components/Signup/Email';
import InviteFriend from './Components/Signup/InviteFriend';
import Password from './Components/Signup/Password';
import Socials from './Components/Signup/Socials';
import { BoxesCore } from './Components/ui/background-boxes';
import { BackgroundBeamsDemo } from './Pages/BackgroundBeamsDemo';
import Layout from './Pages/Layout/Layout';
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
      <Route path='socials' element={<Socials/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
    </Routes>
    {/* <BackgroundBeamsDemo/> */}
    {/* <Layout/> */}
  
  </BrowserRouter>
);
}

export default App;
