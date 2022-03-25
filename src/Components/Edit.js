import React, { useState } from 'react'
export default function Edit() {

    return (
        <>
            <center>
                
                <h6>Please enter your subject and lecture name in below boxes.</h6><br/>
                <div className='app-container'>
                    <b>Day</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder="day" /><br /><br />
                    <b>8:30-9:30</b>&nbsp;&nbsp;<input placeholder="subject 1" />&nbsp;&nbsp;
                    <input placeholder="lecture 1" /><br /><br />
                    <b>9:30-10:30</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 2" />&nbsp;&nbsp;
                    <input placeholder="lecture 2" /><br /><br />
                    <b>10:30-11:00</b>
                    <input value="SHORT BREAK" /><br /><br />
                    <b>11:00-12:00</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 3" />&nbsp;&nbsp;
                    <input placeholder="lecture 3" /><br /><br />
                    <b>12:00-01:00</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 4" />&nbsp;&nbsp;
                    <input placeholder="lecture 4" /><br /><br />
                    <b>01:00-01:30</b>
                    <input value="LUNCH BREAK" /><br /><br />
                    <b>01:30-02:30</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 5" />&nbsp;&nbsp;
                    <input placeholder="lecture 5" /><br /><br />
                    <b>02:30-01:30</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 6" />&nbsp;&nbsp;
                    <input placeholder="lecture 6" /><br /><br />
                    <b>02:30-03:30</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 7" />&nbsp;&nbsp;
                    <input placeholder="lecture 7" /><br /><br />
                    <b>03:30-04:30</b>&nbsp;&nbsp;&nbsp;<input placeholder="Subject 8" />&nbsp;&nbsp;
                    <input placeholder="lecture 8" /><br /><br />
                </div><br/>
                <button class="btn btn-warning">Reset</button>&nbsp;&nbsp;
                <button class="btn btn-success">Save</button>
            </center>
        </>
    )
}

