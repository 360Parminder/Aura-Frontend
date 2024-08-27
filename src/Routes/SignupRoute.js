import { Route, Router } from "react-router-dom";
import Email from "../Components/Signup/Email";
import Password from "../Components/Signup/Password";
import Signup from "../Pages/Signup/Signup";


export default function SignupRoute(){
    return (
    <Route path="/" element={<Signup/>} >
      <Route index element={<Email/>} />
      <Route path='password' element={<Password/>}/>
    </Route>
    )
}