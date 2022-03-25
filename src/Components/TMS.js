import React from "react";
import { Table}from "react-bootstrap";
import {Link }  from "react-router-dom";
import "./App.css";

export default function TMS() {
    return (
        <>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                                </tr>
                        </tbody>
                    </Table>
                </div>                
            </center>
            <center>
            <Link to="/edit" class="btn btn-primary">Edit</Link>&nbsp;&nbsp;&nbsp;
               
            </center>
        </>
    )
}
