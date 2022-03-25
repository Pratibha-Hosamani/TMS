import React from 'react'
import { Card } from 'react-bootstrap'

export default function Forgotpassword() {
    return (
        <>
            <center>
                <br /><br /><br /><br />
                <Card style={{ width: "40rem", height: "32rem" }} bg="warning" align="center" border="dark"><br /><br />
                    <div className="app-container">
                        <Card style={{ width: "30rem", height: "25rem" }} bg="info" border="dark">
                            <Card.Body>
                                <Card.Text><br />
                                    <h2><center>Recover Your Account</center></h2>
                                    <Card.Img style={{ width: "3rem", height: "3rem" }} src="https://cdn2.iconfinder.com/data/icons/cyber-robbery-hacker/66/33-512.png" /><br /><br />
                                    <h6><center>please fill your email id properly</center></h6>
                                    <input type="email" className="form-control" placeholder="Email address" required /><br />
                                    <div class="mt-4 pt-2">
                                        <input class="btn btn-success btn-lg" type="submit" value="Send Mail" />
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Card>
            </center>
        </>
    )
}
