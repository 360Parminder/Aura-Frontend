 /* eslint-disable */ 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Email from './Components/Signup/Email';
import InviteFriend from './Components/Signup/InviteFriend';
import Password from './Components/Signup/Password';
import ProfilePic from './Components/Signup/ProfilePic';
import { BoxesCore } from './Components/ui/background-boxes';
import { BackgroundBeamsDemo } from './Pages/BackgroundBeamsDemo';
import Layout from './Pages/Layout/Layout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Profile from './Pages/Profile/Profile';
import Error from './Pages/Error';
import Contact from './Pages/Contact/Contact';
import MoviesShowsDashboard from './Pages/MoviesShowsDashboard/MoviesShowsDashboard';
import Home from './Pages/Home/Home';


function App() {
  return (
  <>
  {/* <Login/> */}
    {/* <Signup/> */}
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='moviesShowsDashboard' element={<MoviesShowsDashboard/>}/>
      </Route>
      <Route path="/signup" element={<Signup/>} >
      <Route index element={<Email/>} />
      <Route path='password' element={<Password/>}/>
      <Route path='inviteFriends' element={<InviteFriend/>}/>
      <Route path='Avatar' element={<ProfilePic/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/homePage" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    {/* <BackgroundBeamsDemo/> */}
    {/* <Layout/> */}
  </>
  
 
);
}

export default App;
