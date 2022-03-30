import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap"
import "./Registration.css";
import axios from "axios"
import Header from "./Header"
const Registration = () => {
  const [user, setUser] = useState("");
  const changeuser = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  const navigate = useNavigate()

  const handleClick = async () => {
    if (!user.username ||
      !user.email ||
      !user.password ||
      !user.cpassword ||
      !user.branch ||
      !user.position) {
      alert("enter all fields")
    } else {
      if (user.password == user.cpassword) {
        await axios.post("http://localhost:5000/add", user).then((succ) => {
          alert("User created successfully")
          navigate('/login')
        }).catch((err) => {
          alert("Oops.. Gadbad aito")
        })

      } else {
        alert("password does not match")
      }
    }
  }

  // const handleClick = async () => {
  //   if (!user.username ||
  //     !user.email ||
  //     !user.password ||
  //     !user.cpassword ||
  //     !user.branch ||
  //     !user.position) {

  //     alert("Enter all fields")
  //   } else {
  //     if (user.password == user.cpassword) {
  //       await axios.post("http://localhost:5000/add", user)
  //         .then((succ) => {
  //           alert("Registered");
  //           navigate("/login");
  //         })
  //         .catch(err => alert("Failure"))
  //        } else {
  //       alert("Password does not match")
  //     }
  //   }
  // }

  return (
    <>
      <center>
        <Card bg color="whitesmoke" style={{ width: "55rem", height: "62rem" }} >
          <br /><br /><br />
          <center>
            <Card style={{ width: "50rem", height: "55rem" }} className="bg-white text-dark">
              <center><br />
                <img style={{ width: "30rem", height: "20rem" }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" />
              </center>
              <br />
              <h2 class="mb-4 pb-2 pb-md-0 mb-md-5"><b>Sign Up</b></h2>
              <center>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="USN" onChange={(e) => changeuser(e)} name="usn" />
                  </div>
                </div>
              </center>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Username" onChange={(e) => changeuser(e)} name="username" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="email" id="form3Example3c" class="form-control form-control-lg" placeholder="Email" onChange={(e) => changeuser(e)} name="email" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" id="form3Example3c" class="form-control form-control-lg" placeholder="Password" onChange={(e) => changeuser(e)} name="password" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" id="form3Example3c" class="form-control form-control-lg" placeholder="Confirm password" onChange={(e) => changeuser(e)} name="cpassword" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <select>
                      <option></option>
                    </select>
                    {/* <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Branch" onChange={(e) => changeuser(e)} name="branch" /> */}
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Position" onChange={(e) => changeuser(e)} name="position" />
                  </div>
                </div>
              </div>

              <div class="mt-4 pt-2">
                <Link to="/login" className="signup-image-link"> i am already registered</Link><br /><br />

                <button onClick={handleClick} class="btn btn-primary btn-lgs">Register</button>
              </div><br />
              <p>By creating this account, You agree to our terms and conditions</p>
            </Card>
          </center>
        </Card>
      </center>  </>
  )
}
export default Registration