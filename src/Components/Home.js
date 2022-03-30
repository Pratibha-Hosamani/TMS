import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useParams } from 'react-router';
import Header from './Header';

export default function Home() {
  const { usn } = useParams()
  const [uData, setUdata] = useState("")
  const getdata = async () => {
    await axios.get(`localhost:5000/login/${usn}`).then((succ) => {
      setUdata(succ.data)
      console.log(succ.data)
    })

  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <Header usn={uData.usn} />
      <center><br /><br /><br /><br />
        <div className='home-page' bg color="whitesmoke">
          <div className='home-div'>
            <p className="pt-5">WELCOME</p>
            <div>
              <img style={{ width: "15rem", height: "10rem" }} src="https://th.bing.com/th/id/R.ce7be8cce8f4050eb596a2a57f570bd9?rik=7jz7l1yqMAoKlg&riu=http%3a%2f%2fwww.sherbertgroup.com%2fwp-content%2fuploads%2f2017%2f06%2fTMS-Dev-Logo-7-300x185.png&ehk=6%2bFPcMOo8skqhRLyXvq6ODZKtYdoi7ho0NHorKnz6Es%3d&risl=&pid=ImgRaw&r=0" align="center" />
            </div><br />
            <h1><b>We Are The TMS Developer</b></h1>
          </div>
        </div>
        <br />
        <img src="https://th.bing.com/th/id/R.47d65549e6accaf026918741fc8d8629?rik=LrByMJy92uppJg&riu=http%3a%2f%2fwww.imperial.ac.uk%2fImageCropToolT4%2fimageTool%2fuploaded-images%2ftimetable--tojpeg_1444650644694_x2.jpg&ehk=WjxVFJLXgE1Da5eiW6%2bEj2sc%2bf97QEXKBu35URBCxDA%3d&risl=&pid=ImgRaw&r=0" align="center" style={{ width: "25rem", height: "10rem" }} />
      </center>
    </>
  );
}
