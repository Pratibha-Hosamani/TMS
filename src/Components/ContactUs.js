import React, {useState, useEffect} from 'react'
import { Card } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router';
export default function ContactUs() {

  const { usn } = useParams()
  const [uData, setUdata] = useState("")
  const getdata = async () => {
    await axios.get(`localhost:5000/login/${usn}`).then((succ) => {
      setUdata(succ.data)
      console.log(succ.data)
    }).catch((err) => {
      alert("Error")
    })

  }
  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <center><br />
        <Card bg="light" style={{ width: "65rem", height: "40rem" }}>
          <h3><b><center>Contact Us</center></b></h3><br />
          <div className='row '>
            <div className="col-md-6 padding-0">
              <div className="e-card stacked"><center>
                <Card className="bg-dark text-white" align="center" style={{ width: "30rem", height: "33rem" }}><br /><br />
                  <div className="contact_info_item d-flex justify -content-start align-items-center">
                    <img style={{ width: "5rem", height: "5rem" }} src="https://th.bing.com/th/id/R.eaa6b18a59023f1009b4e3bc2be606af?rik=vkKpQYVNPw5Mlw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f10%2ftelephone-phone-icon_213730.png&ehk=zYgdJMEBqViem8vrUsjehA5klWkLA5eIv07%2fV6O%2fDQ8%3d&risl=&pid=ImgRaw&r=0" alt="phone" />
                    <div className="contact_info_content">
                      <div className="contact_info_title">
                        Phone
                      </div>
                      <div className="contact_info_text">
                        +91 1111 523 2190
                      </div>
                    </div>
                  </div><br /><br /><br />

                  <div className="contact_info_item d-flex justify-content-start align-items-center">
                    <img style={{ width: "5rem", height: "5rem" }} src="https://th.bing.com/th/id/R.4103a626b1d2b74bb16a2da651883b4c?rik=j%2bSJchBME%2fe5lg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f07%2fblue-email-icon_178906.jpg&ehk=VdwcpM8mk6Y8v6jnnKG5zutGM1FZ9q%2f99c%2b1UqYyjgU%3d&risl=&pid=ImgRaw&r=0" alt="phone" />
                    <div className="contact_info_content">
                      <div className="contact_info_title">
                        Email
                      </div>
                      <div className="contact_info_text">
                        info@tmsteams.com
                      </div>
                    </div>
                  </div><br /><br /><br />

                  <div className="contact_info_item d-flex justify-content-start align-items-center">
                    <img style={{ width: "5rem", height: "5rem" }} src="https://cdn4.iconfinder.com/data/icons/building-location/128/office-512.png" alt="phone" />
                    <div className="contact_info_content">
                      <div className="contact_info_title">
                        Address
                      </div>
                      <div className="contact_info_text">
                        hubli,karnataka,India
                      </div>
                    </div>
                  </div>
                </Card>
              </center>
              </div>
            </div>


            <div className='col-md-6 padding-0'>
              <div className="e-card stacked">
                <Card className="bg-white text-dark" align="left" style={{ width: "30rem", height: "33rem" }}>
                  <Card.Body>
                    <Card.Text>
                      <div class="form-outline">
                        <input type="text" id="form3Example3c" class="form-control form-control-md" placeholder="Your name" />
                      </div><br />
                      <div class="form-outline">
                        <input type="email" id="form3Example3c" class="form-control form-control-md" placeholder="Id" />
                      </div><br />
                      <div class="form-outline">
                        <input type="number" id="form3Example3c" class="form-control form-control-md" placeholder="Your phone number" />
                      </div>
                      <div className="form-outline mt-3">
                        <textarea className="form-control form-control-md" placeholder="Message" cols="20" rows="10"></textarea>
                      </div>
                      <div class="mt-3 pt-1">
                        <input class="btn btn-success btn-lg" type="submit" value="Send Message" />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </center>
    </>
  )
}
