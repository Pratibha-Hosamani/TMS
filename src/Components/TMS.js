import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";

export default function TMS() {
    const [user, setUser] = useState();
    // setUser(user.data)
    const { usn } = useParams()

    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        auth()
        getdata()
        // Edittable()
    }, [])
    const auth = async () => {
        const userUsn = localStorage.getItem("usn")
        if (userUsn !== usn) {
            navigate("/login")
        }
    }

    const getdata = async () => {
        await axios.get(`http://localhost:5000/getuser/${usn}`).then((succ) => {
            setUser(succ.data)
        }).catch((err) => {
            alert("Error")
        })

        await axios.get("http://localhost:5000/getable").then(succ => {
            setData(succ.data)
        }).catch(err => {
            alert("Oops error occured")
        })

    }

    const editDay = async (e) => {
        navigate(`/edit/${usn}/${e}`)
        // await axios.get(`localhost:5000/getuser/${usn}`).then(succ => {

        //     setUser(succ.data)
        //     console.log(succ.data)
        // }).catch(err => {
        //     alert("Error occured")
        // })
    }


    // const EditButton = () => {
    //     if (usn == "pp") {

    //         return (
    //             <div>
    //                 <button onClick={EditTable} >
    //                     Edit
    //                 </button>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>

    //             </div>
    //         )
    //     }
    // }


    const displayData = (item) => {
        return (
            <tr>
                <td><b>{item.day}</b></td>
                <td>{item.subject1}</td>
                <td>{item.lecture1}</td>
                <td>{item.subject2}</td>
                <td>{item.lecture2}</td>

                <td>Short Break</td>
                <td>{item.subject3}</td>
                <td>{item.lecture3}</td>
                <td>{item.subject4}</td>
                <td>{item.lecture4}</td>
                <td>Lunch BREAK</td>
                <td>{item.subject5}</td>
                <td>{item.lecture5}</td>
                <td>{item.subject6}</td>
                <td>{item.lecture6}</td>
                <td>{item.subject7}</td>
                <td>{item.lecture7}</td>
                <td>{item.subject8}</td>
                <td>{item.lecture8}</td>


                {
                    usn == "admin" ? (
                        <td><button onClick={() => editDay(item.day)}>Edit</button></td>

                    ) : ""
                }


            </tr>
        );
    }



    const addTable = () => {
        navigate(`/timetable/${usn}`)
    }

    return (
        <>
            <Header usn={usn} />
            <center>
                <div className="app-container">
                    <h1><b><u>College Timetable</u></b></h1>
                    <br /><br />
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <td>day/time</td>
                                <td colSpan="2"><b>08:30-09:30</b></td>
                                <td colspan="2"><b>09:30-10:30</b></td>
                                <td><b>10:30-11:00</b></td>
                                <td colspan="2"><b>11:00-12:00</b></td>
                                <td colSpan="2"><b>12:00-01:00</b></td>
                                <td><b>01:00-01:30</b></td>
                                <td colspan="2"><b>01:30-02:30</b></td>
                                <td colspan="2"><b>02:30-03:30</b></td>
                                <td colspan="2"><b>03:30-04:30</b></td>
                                <td colspan="2"><b>04:30-05:30</b></td>
                                {
                                    usn == "admin" ? (
                                        <td colspan="2"><b>Edit</b></td>

                                    ) : ""
                                }

                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => displayData(item))}
                            {/* <tr>
                                <td><b>Monday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td rowspan="6"><b><center>S<br />H<br />O<br />R<br />T<br /><br />B<br />R<br />E<br />A<br />K</center></b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td rowspan="6"><center><b>L<br />U<br />N<br />C<br />H<br /><br />B<br />R<br />E<br />A<br />K</b></center></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button onClick={editMonday}>Edit</button></td>
                            </tr>
                            <tr>
                                <td><b>Tuesday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>Edit</button></td>

                            </tr>
                            <tr>
                                <td><b>Wednesday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>Edit</button></td>

                            </tr>
                            <tr>
                                <td><b>Thursday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>Edit</button></td>

                            </tr>
                            <tr>
                                <td><b>Friday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>Edit</button></td>

                            </tr>
                            <tr>
                                <td><b>Saturday</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button>Edit</button></td>

                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </center>

            <center>

                {
                    usn == "admin" ? (

                        <div className="EditButton">

                            <button onClick={addTable}>Add table</button>
                        </div>
                    ) : ""
                }
                {/* <EditButton /> */}
                {/* {
                    user.usn == "pp" ?
                        (
                            
                        ) : (
                            ""
                        )
                } */}
                {/* {
                    user.usn === "pp" ? (
                        <div>
                            <p>Hello</p>
                        </div>
                    ) : (
                        <div>
                            <h1>
                                Hii
                            </h1>
                        </div>
                    )
                } */}

            </center>
            {/* {
                    user.usn === "admin" ? 

                     : ""

                } */}



            {/* {
                username == user.username ? (
                    username
                ) : (
                    ""
                )
            } */}
        </>
    )
}
