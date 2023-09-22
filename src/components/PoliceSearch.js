import React, { useState } from 'react'
import './style/PoliceSearch.css'
import CryptoJS from 'crypto-js';
import swal from 'sweetalert';

export default function PoliceSearch() {
    const [encryptedData, setEncryptedData] = useState('');
    const [decryptedData, setDecryptedData] = useState('');
    const [searchType, setSearchType] = useState('Record ID');

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSearchType(selectedValue);
    };


    const secretKey = 'logalrecord@1298';
    const fixedIV = CryptoJS.enc.Hex.parse('0000000000000000');

    const searchRecord = () => {
        const searchvalue = document.getElementById('record-info').value;
        const encrypted = CryptoJS.AES.encrypt(searchvalue, secretKey, {
            iv: fixedIV, // Use the fixed IV
        }).toString();
        setEncryptedData(encrypted);
        console.log(encryptedData)
    }

    return (
        <div className='PoliceSearch'>
            <div className="search-form">
                <h4 style={{ textAlign: 'center' }}>Search Record</h4>
                {/* <p>
                    <label htmlFor="suspect-name">Name of the suspect: </label> <br />
                    <input type="text" placeholder='Name of suspect' id='suspect-name' />
                </p>

                <p>
                    <label htmlFor="suspect-dob">Date of Birth of Suspect: </label> <br />
                    <input type="date" id='suspect-dob' />
                </p> */}
                <label htmlFor="search-basis" style={{ fontWeight: 'bold' }}>Search based on:</label>
                <select id="search-basis" name="search-basis"
                    onChange={handleSelectChange}
                    style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: 'bold' }}>
                    <option value="Record ID">Record ID</option>
                    <option value="AADHAR Number">AADHAR Number</option>
                    <option value="Sketch">Sketch</option>
                    <option value="Description">Description</option>
                    <option value="Suspect name">Suspect name</option>
                </select>

                <p>
                    <label htmlFor="record-info" style={{ fontWeight: 'bold' }}>Enter {searchType}: </label> <br />
                    <input type="text" placeholder={searchType + ' of the record'} id='record-info' />
                </p>


                {/* <p>
                    <label htmlFor="suspect-aadhar">Aadhar no of the suspect: </label> <br />
                    <input type="text" placeholder='Aadhar no of the suspect' id='suspect-aadhar' />
                </p>

                <p>
                    <label htmlFor="suspect-criminal-id">Criminal id of the suspect: </label> <br />
                    <input type="text" placeholder='Criminal id of the suspect' id='suspect-id' />
                </p> */}

                <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={searchRecord}>
                    Search
                </button>
            </div>
        </div>
    )
}
