import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';
import "./Edit.css"
function Edit() {

    const [data, setData] = useState([]);


    const { day } = useParams()
    useEffect(() => {
        getData()
    }, [])



    const getData = async () => {
        await axios.get(`http://localhost:5000/getable/${day}`).then(succ => {
            setData(succ.data)
        }).catch(err => {
            alert("Error occured")
        })
    }
    const changeUser = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)

    }

    const { usn } = useParams()

    const navigate = useNavigate()
    const handleAdd = async () => {
        await axios.put(`http://localhost:5000/table`, data).then((succ) => {
            alert("Day updated successfully")
            navigate(`/tms/${usn}`)
        })
    }
    return (
        <div>
            <div className="EditPage">
                <div className="EditRow">
                    <div className='table-col-1'>
                        <table>
                            <thead>
                                <tr>

                                    <th>Day</th>
                                    <select onChange={(e) => changeUser(e)} name="day">
                                        <option value="">Select your day</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </select>
                                    {/* <td><input type="text" name='day' placeholder='day'  /></td> */}

                                </tr>
                                <tr>
                                    <th>8:30-9:30</th>
                                    <td><input type="text" name='subject1' value={data.subject1} placeholder='sub1' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture1' value={data.lecture1} placeholder='lec1' onChange={(e) => changeUser(e)} /></td>
                                </tr>

                                <tr>
                                    <th>9:30-10:30</th>
                                    <td><input type="text" name='subject2' value={data.subject2} placeholder='sub2' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture2' value={data.lecture2} placeholder='lec2' onChange={(e) => changeUser(e)} /></td>
                                </tr>

                                <tr>
                                    <th>10:30-11:00</th>
                                    S h o  r t    B r e a k
                                </tr>
                                <tr>
                                    <th>11:00-12:00</th>
                                    <td><input type="text" name='subject3' value={data.subject3} placeholder='sub3' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture3' value={data.lecture3} placeholder='lec3' onChange={(e) => changeUser(e)} /></td>

                                </tr>
                                <tr>
                                    <th>12:00-1:00</th>
                                    <td><input type="text" name='subject4' value={data.subject4} placeholder='sub4' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture4' value={data.lecture4} placeholder='lec4' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>1:00-1:30</th>
                                    L u n c h    B r e a k
                                </tr>
                                <tr>
                                    <th>1:30-2:30</th>
                                    <td><input type="text" name='subject5' value={data.subject5} placeholder='sub5' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture5' value={data.lecture5} placeholder='lec5' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>2:30-3:30</th>
                                    <td><input type="text" name='subject6' value={data.subject6} placeholder='sub6' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture6' value={data.lecture6} placeholder='lec6' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>3:30-4:30</th>
                                    <td><input type="text" name='subject7' value={data.subject7} placeholder='sub7' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture7' value={data.lecture7} placeholder='lec7' onChange={(e) => changeUser(e)} /></td>

                                </tr>
                                <tr>
                                    <th>4:30-5:30</th>
                                    <td><input type="text" name='subject8' value={data.subject8} placeholder='sub8' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture8' value={data.lecture8} placeholder='lec8' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                            </thead>
                        </table>



                    </div>
                    <div className="EditButton">

                        <button onClick={handleAdd}>Update</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit