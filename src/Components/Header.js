import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img style={{width:"3rem",height:"3rem"}} src="https://th.bing.com/th/id/R.ce7be8cce8f4050eb596a2a57f570bd9?rik=7jz7l1yqMAoKlg&riu=http%3a%2f%2fwww.sherbertgroup.com%2fwp-content%2fuploads%2f2017%2f06%2fTMS-Dev-Logo-7-300x185.png&ehk=6%2bFPcMOo8skqhRLyXvq6ODZKtYdoi7ho0NHorKnz6Es%3d&risl=&pid=ImgRaw&r=0"/>
          <a className="navbar-brand"><b></b></a>
          <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/${props.usn}`} className="nav-link active" aria-current="page"><b>Home</b></Link>
               </li>
               <li className="nav-item">
              <Link to={`/about/${props.usn}`} className="nav-link active" aria-current="page"><b>About</b></Link>
              </li>
              
              <li className="nav-item">
              <Link to={`/tms/${props.usn}`} className="nav-link active" aria-current="page"><b>Time table</b></Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/registration" className="btn btn-outline-success" type="submit"><b>Sign-up</b></Link>&nbsp;&nbsp;&nbsp;
              <Link to="/login" className="btn btn-outline-primary" type="submit"><b>Log in</b></Link>
            </form>
          </div>
        </div>
      </nav>
  );
}
