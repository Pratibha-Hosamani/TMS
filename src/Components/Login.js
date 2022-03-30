import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Login = () => {
  const [login, setLogin] = useState("");


  const navigate = useNavigate()
  const setChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value })
  }

  const handleClick = async () => {

    try {
      await axios.get(`http://localhost:5000/getuser/${login.usn}`).then(succ => {
        console.log(succ.data)
        if(login.password===succ.data.password){
          alert("Login successful")
          localStorage.setItem("usn",succ.data.usn)
          navigate(`/tms/${succ.data.usn}`)
        }else{
          alert("Enter right password")
          window.location.reload()
        }
      }).catch((err) => {
        alert("Error occured")
      })
    } catch (error) {
            alert(error.msg)

    }
    // try {
    //   const getUser = await axios.get(`http://localhost:5000/getuser/${login.usn}`)
    //   if (!login.email || !login.password) {
    //     alert("enter all fields")
    //   } else {
    //     if (getUser.data.password === login.password) {
    //       alert("login successful")
    //       navigate(`/tms/${login.usn}`)
    //       // alert(getUser.data.username)
    //     } else {
    //       alert("login failed")
    //     }

    //   }
    // } catch (error) {
    //   alert(error.msg)
    // }

  }
  // const handleClick= async()=>{
  //   const fetchUser = await axios.get(`http://localhost:5000/getuser/${login.email}`)
  //   .then(()=>{
  //     alert(fetchUser.password)
  //     if(!login.email || !login.password){
  //       alert("enter all fields")
  //    }else{
  //       alert(fetchUser.password)
  //     }
  //   }).catch(()=>{
  //     alert("")
  // })
  // }

  return (
    <>
      <br /><br /><br /><br /><br />
      <center>
        <Card style={{ width: "30rem", height: "35rem" }} bg="primary">
          <center><br /><br />
            <Card style={{ width: "20rem", height: "30rem" }} className="bg-dark text-white">
              <Card.Body>
                <Card.Text>
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2><br />
                  <p>Please login to your account </p>

                  <input type="text" class="form-control" placeholder="USN" name="usn" onChange={(e) => setChange(e)} />
                  <br />
                  <input type="password" class="form-control" placeholder="password" name="password" onChange={(e) => setChange(e)} />
                  <br />
                  <div className="text-center pt-1 mb-5 pb-1">
                    {/* <div class="btn btn-primary btn-lg" type="submit" onClick={handleClick} >Log in</div><br /> */}
                    <button onClick={handleClick}>Login</button><br />
                    <Link to="/recover" class="text-muted">Forgot password?</Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account? <Link to="/Registration" className="btn btn-outline-danger">Sign up</Link></p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </center>
        </Card>      </center>
    </>
  );
}
export default Login
