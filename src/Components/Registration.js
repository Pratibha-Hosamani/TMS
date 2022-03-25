import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap"
import "./Registration.css";

export const Registration = () => {

  const [userRegistration, setUserRegistration] = useState({
    Id: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Branch: ""
  });

  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ Id: "", Username: "", Email: "", Password: "", ConfirmPassword: "", Branch: "" })
  }

  return (
    <>
      <center>
        <Card bg color="whitesmoke" style={{ width: "55rem", height: "65rem" }} >
          <br /><br /><br />
          <center>
          <Card style={{ width: "50rem", height: "58rem" }} className="bg-white text-dark">
            <center><br/>
           <img  style={{width:"30rem",height:"20rem"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image"/>
           </center>
           <br/>
            <h2 class="mb-4 pb-2 pb-md-0 mb-md-5"><b>Sign Up</b></h2>
            <form action="" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Id" value={userRegistration.Id} onChange={handleInput} name="Id" id="Id" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Username" value={userRegistration.Username} onChange={handleInput} name="Username" id="Username" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="email" id="form3Example3c" class="form-control form-control-lg" placeholder="Email" value={userRegistration.Email} onChange={handleInput} name="Email" id="Email" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" id="form3Example3c" class="form-control form-control-lg" placeholder="Password" value={userRegistration.Password} onChange={handleInput} name="Password" id="Password" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" id="form3Example3c" class="form-control form-control-lg" placeholder="Confirm password" value={userRegistration.ConfirmPassword} onChange={handleInput} name="ConfirmPassword" id="ConfirmPassword" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example3c" class="form-control form-control-lg" placeholder="Branch" value={userRegistration.Branch} onChange={handleInput} name="Branch" id="Branch" />
                  </div>
                </div>
              </div>
              <div class="mt-4 pt-2">
                <Link to="/login" className="signup-image-link"> i am already registered</Link><br /><br />
                <input class="btn btn-primary btn-lg" type="submit" value="REGISTER" />
              </div><br/>
              <p>By creating this account, You agree to our terms and conditions</p>
            </form>
          </Card>
          </center>
        </Card>
      </center>
      <div>
        {
          records.map((curElem) => {
            return (
              <div className="showDataStyle">
                <p>{curElem.Id}</p>
                <p>{curElem.Username}</p>
                <p>{curElem.Password}</p>
                <p>{curElem.ConfirmPassword}</p>
                <p>{curElem.Branch}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}