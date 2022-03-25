import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { Email: Email, Password: Password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }

  return (
    <>
      <br /><br /><br /><br /><br />
      <center>
        <Card style={{ width: "30rem", height: "35rem" }} bg="primary">
          <center><br /><br />
            <Card style={{ width: "20rem", height: "30rem" }} className="bg-dark text-white">
              <form action="" onSubmit={submitForm}>
                <Card.Body>
                  <Card.Text>
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2><br />
                    <p>Please login to your account </p>

                    <input type="email" id="form3Example1c" class="form-control" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="password" id="form3Example1c" class="form-control" placeholder="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <div className="text-center pt-1 mb-5 pb-1">
                      <Link to="/tms" class="btn btn-primary btn-lg" type="submit" >Log in</Link><br />
                      <Link to="/recover" class="text-muted">Forgot password?</Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account? <Link to="/Registration" className="btn btn-outline-danger">Sign up</Link></p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </form>
            </Card>
          </center>
        </Card>
      </center>

      <div>
        {
          allEntry.map((curElem) => {
            return (
              <div className="showDataStyles">
                <p>{curElem.Email}</p>
                <p>{curElem.Password}</p>
              </div>
            )

          })
        }
      </div>
    </>
  );
}

export default Login;
