import React, { useState } from 'react'
import swal from 'sweetalert'

export default function UserCredentials() {
    const [otpSent, setOptSent] = useState(false);
    const [otp, setOtp] = useState('12345');
    const [correctOtp, setCorrectOtp] = useState(false);

    const verifyOtp = () => {
        const enteredOtp = document.getElementById('aadhar-otp').value;
        if(enteredOtp === otp){
            setCorrectOtp(true);
        }
        else{
            swal({
                title: "Failed!",
                text: 'OTP does not match',
                icon: "warning",
                timer: 5000,
                button: false
            });
            setCorrectOtp(false);
        }
    }

    const sendOtp = () => {
        setOptSent(true);
    }
    return (
        <div className='UserCredentials'>
            {
                otpSent === true ?
                    <div className="enter-otp">
                        <p style={{color: '#D7663E', fontSize: '12px'}}>*An OTP has been sent to your registered mobile number</p>
                        <input type="password" id='aadhar-otp' placeholder='One Time Password' />
                        <button style={{ width: '100%', marginTop: '25px' }} type="button" className="btn btn-success" onClick={verifyOtp}>Register</button>
                        {
                            correctOtp && 
                            <p>Verified</p>
                        }
                    </div>
                    :
                    <div className="file-complain">
                        <input type="text" id='person-aadhar' placeholder='AADHAR Number' />
                        <input type="text" id='complain-type' placeholder='Complain type' />
                        <button style={{ width: '100%', marginTop: '25px' }} type="button" className="btn btn-success" onClick={sendOtp}>Send OTP</button>
                    </div>
            }
        </div>
    )
}
