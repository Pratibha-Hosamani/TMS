import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header";
import Login from "./Components/Login";
import  Registration  from "./Components/Registration";
import { About } from "./Components/About";
import Home from "./Components/Home";
import Recoverypassword from "./Components/Recoverypassword";
import ContactUs from "./Components/ContactUs";
import TMS from "./Components/TMS";
import Timetable from "./Components/Timetable";
import Edit from "./Components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:usn" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />

        <Route exact path="/registration" element={<Registration/>}/>
        <Route exact path="/about/:usn" element={<About/>}/>
        <Route exact path="/contact/:usn" element={<ContactUs/>}/>
        <Route exact path="/tms/:usn" element={<TMS/>}/>
        <Route exact path="/recover/:usn" element={<Recoverypassword/>}/>
        <Route exact path="/timetable/:usn" element={<Timetable/>}/>
        <Route exact path="/edit/:usn/:day" element={<Edit/>} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;
