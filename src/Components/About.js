import React from 'react'
import { Card } from "react-bootstrap"

export const About = () => {
    return (
        <>
            <center>
                <br /><br />
                <h1><b>About Us</b> </h1>
                <Card bg="light"style={{ width: "45rem", height: "12rem" }}><br />
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <Card style={{ width: "18rem", height: "8rem" }} bg="warning">
                                <Card.Body>
                                    <Card.Text>
                                    </Card.Text>
                                    <b>>>Mission Statement:<br /></b>
                                    generates timetable according to the data given by the user.
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-1 mb-0">
                            <Card style={{ width: "18rem", height: "8rem" }} bg="info">
                                <Card.Body>
                                    <Card.Text>
                                        <b>>>Vision Statement:<br /></b>
                                        Ensuring that functioning of App in a seamless manner without any complexities.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Card>


                <br /><Card bg="white" style={{ width: "45rem", height: "21rem" }}><br />
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <Card style={{ width: "15rem", height: "18rem" }} className=" text-dark" bg="primary">
                                <Card.Img variant="bottom" src="https://www.wikihow.com/images/c/c9/Teach-Kids-to-Tell-Time-Step-21.jpg" style={{ width: "15rem", height: "18rem" }} alt="Card image" />
                                <Card.ImgOverlay>
                                    <b>see your<br /> schedule</b>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Card style={{ width: "18rem", height: "18rem" }} className="text-dark">
                                <Card.Img variant="bottom" src="https://www.mindtools.com/media/Responsive-Images/Articles/Time_Management/IS_3185737_trait2lumiere_2x1.jpg" style={{ width: "8rem", height: "7rem" }} alt="Card image" />
                                <Card.Text>
                                    <b>In this platform, you refers to the way that you organize and plan how long you spend college hours on specific activities.</b>
                                </Card.Text>
                            </Card>
                        </div>
                    </div>.
                </Card>
            </center>
        </>
    )
}

export default About
