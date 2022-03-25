import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header";
import Login from "./Components/Login";
import { Registration } from "./Components/Registration";
import { About } from "./Components/About";
import Home from "./Components/Home";
import Recoverypassword from "./Components/Recoverypassword";
import ContactUs from "./Components/ContactUs";
import TMS from "./Components/TMS";
import Edit from "./Components/Edit";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/tms" element={<TMS/>}/>
        <Route exact path="/recover" element={<Recoverypassword/>}/>
        <Route exact path="/edit" element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App;
