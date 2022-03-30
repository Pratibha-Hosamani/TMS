import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header';
import { useParams, useNavigate } from 'react-router';

const Tymtable = () => {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState({});
    const { usn } = useParams()

    const [udata, setUdata] = useState("")
    const navigate = useNavigate()

    const changeUser = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }

    const deleteRow = async (item) => {
        // alert(item)
        await axios.delete(`http://localhost:5000/deletetable/${item}`).then(() => {
            window.location.reload()
        }).catch(() => {
            alert("Day deleted")
        })
    }

    const display = (item) => {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{item.day}</td>
                            <td>{item.subject1}</td>
                            <td>{item.lecture1}</td>
                            <td>{item.subject2}</td>
                            <td>{item.lecture2}</td>
                            <td>{item.subject3}</td>
                            <td>{item.lecture3}</td>
                            <td>{item.subject4}</td>
                            <td>{item.lecture4}</td>
                            <td>{item.subject5}</td>
                            <td>{item.lecture5}</td>
                            <td>{item.subject6}</td>
                            <td>{item.lecture6}</td>
                            <td>{item.subject7}</td>
                            <td>{item.lecture7}</td>
                            <td>{item.subject8}</td>
                            <td>{item.lecture8}</td>
                            <button onClick={() => deleteRow(item.day)}>Delete</button>
                        </tr>  </tbody>
                </table>
            </div>
        );
    }

    const handleAdd = async () => {
        if (newData.day && newData.subject1 && newData.subject2 && newData.subject3 && newData.subject4 && newData.subject5 && newData.subject6 && newData.subject7 && newData.subject8 && newData.lecture1 && newData.lecture2 && newData.lecture3 && newData.lecture4 && newData.lecture5 && newData.lecture6 && newData.lecture7 && newData.lecture8) {
            await axios.post("http://localhost:5000/table", newData).then(succ => {
                alert("Data added successsfully")
                navigate(`/tms/${usn}`)
            }).catch(err => {
                alert("Error occured")
            })


            await axios.get("http://localhost:5000/getable").then(succ => {
                setData(succ.data)
            }).catch(err => {
                alert("Oops error occured")
            })
        } else {
            alert("For empty fields enter Null")
        }

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
                                    <td><input type="text" name='subject1' placeholder='sub1' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture1' placeholder='lec1' onChange={(e) => changeUser(e)} /></td>
                                </tr>

                                <tr>
                                    <th>9:30-10:30</th>
                                    <td><input type="text" name='subject2' placeholder='sub2' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture2' placeholder='lec2' onChange={(e) => changeUser(e)} /></td>
                                </tr>

                                <tr>
                                    <th>10:30-11:00</th>
                                    S h o  r t    B r e a k
                                </tr>
                                <tr>
                                    <th>11:00-12:00</th>
                                    <td><input type="text" name='subject3' placeholder='sub3' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture3' placeholder='lec3' onChange={(e) => changeUser(e)} /></td>

                                </tr>
                                <tr>
                                    <th>12:00-1:00</th>
                                    <td><input type="text" name='subject4' placeholder='sub4' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture4' placeholder='lec4' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>1:00-1:30</th>
                                    L u n c h    B r e a k
                                </tr>
                                <tr>
                                    <th>1:30-2:30</th>
                                    <td><input type="text" name='subject5' placeholder='sub5' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture5' placeholder='lec5' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>2:30-3:30</th>
                                    <td><input type="text" name='subject6' placeholder='sub6' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture6' placeholder='lec6' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                                <tr>
                                    <th>3:30-4:30</th>
                                    <td><input type="text" name='subject7' placeholder='sub7' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture7' placeholder='lec7' onChange={(e) => changeUser(e)} /></td>

                                </tr>
                                <tr>
                                    <th>4:30-5:30</th>
                                    <td><input type="text" name='subject8' placeholder='sub8' onChange={(e) => changeUser(e)} /></td>
                                    <td><input type="text" name='lecture8' placeholder='lec8' onChange={(e) => changeUser(e)} /></td>
                                </tr>
                            </thead>
                        </table>



                    </div>
                    <div className="EditButton">
                        <button onClick={handleAdd}>ADD</button>
                    </div>
                </div>
            </div>



        </div>
    )
}



export default Tymtable