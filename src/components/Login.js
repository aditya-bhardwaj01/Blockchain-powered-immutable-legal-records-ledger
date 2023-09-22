import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/Login.css';
import policeofficer from './images/police-officer.png'
import policeaccounts from './dummydata/policelogin.json'
import { Link } from 'react-router-dom'
import swal from "sweetalert"
import UserCredentials from './UserCredentials';
// import PolicePortal from './PolicePortal';

export default function User() {
  const [loginstate, setLoginState] = useState('police')
  const [accounts, setAccount] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setAccount(policeaccounts.accounts)
  }, [])

  const handleOptionChange = (event) => {
    setLoginState(event.target.value);
  };

  const matchCredential = () => {
    const policeid = document.getElementById('police-empid').value;
    const password = document.getElementById('police-password').value;
    for (var i = 0; i < accounts.length; i++) {
      var id = accounts[i].PoliceID;
      var pass = accounts[i].Password;
        console.log(policeid, password)
      if (id === policeid && password === pass) {
        sessionStorage.setItem("logindetail", id);
        navigate('/policeportal')
        break;
      }
      else {
        swal({
          title: "Failed!",
          text: "Invalid credential!!",
          icon: "warning",
          timer: 5000,
          button: false
        });
      }
    }
    // sessionStorage.setItem("logindetail", policeid+'#@#'+password);
  }

  return (
    <div className='Login'>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="login-content">
        <h3>Welcome to our CrimeDataProtector Portal!!</h3>
        <div className="row">
          <div className="login-left col-4">
            <img src={policeofficer} alt="Police officer taking note" />
          </div>
          <div className="login-right col-8">
            <div className="login-box">
              <p id="login-as">
                <span>
                  <label>
                    <input type="radio" id="police" name="loginas" value="police"
                      checked={loginstate === 'police'}
                      onChange={handleOptionChange} />
                    &nbsp;Login as Police officer
                  </label>
                </span>

                <span style={{ marginLeft: '10px' }}>
                  <label>
                    <input type="radio" id="common" name="loginas" value="common"
                      checked={loginstate === 'common'}
                      onChange={handleOptionChange} />
                    &nbsp;Citizen
                  </label>
                </span>
              </p>

              <div className="login-inputs">
                {
                  loginstate === 'police' ?
                    <div className="police-login">
                      <input type="text" id='police-empid' placeholder='Employee id' />
                      <input type="password" id='police-password' placeholder='Password' />
                      <button
                        style={{ width: '100%', marginTop: '25px' }} type="button" className="btn btn-success"
                        onClick={matchCredential}>
                        Login
                      </button>
                    </div>
                    :
                    <UserCredentials />
                }
              </div>
            </div>
          </div>
        </div>
        {/* Login
        <Link to="/usercomplain">User complain</Link>
        <Link to="/policeportal">Police portal</Link> */}
      </div>
    </div>
  )
}
