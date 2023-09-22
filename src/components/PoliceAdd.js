import React, { useState } from 'react'
import './style/PoliceAdd.css'

export default function PoliceAdd() {
  const [crimeType, setCrimeType] = useState('personal')

  const handleSelectChange = (e) => {
    setCrimeType(e.target.value)
  }

  return (
    <div className='PoliceAdd' style={{ padding: '10vh 16vh', textAlign: 'center' }}>
      <div className="search-form">
        <h4 style={{ textAlign: 'center' }}>Add Record</h4>

        {/* <label htmlFor="crime-category" style={{fontWeight: 'bold'}}>Select the category:</label>
        <select id="crime-category" name="crime-category" style={{width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: 'bold'}}>
          <option value="personal">Personal Crimes</option>
          <option value="financial">Financial Crimes</option>
          <option value="drug">Drug-Related Crimes</option>
          <option value="property">Crimes Against Property</option>
          <option value="society">Crimes Against Society</option>
          <option value="juvenile">Juvenile Crimes</option>
        </select> */}

        <label htmlFor="crime-category" style={{ fontWeight: 'bold' }}>Select the category:</label>
        <select id="crime-category" name="crime-category"
          onChange={handleSelectChange}
          style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: 'bold' }}>
          <option value="personal">Personal Crimes</option>
          <option value="financial">Financial Crimes</option>
          <option value="drug">Drug-Related Crimes</option>
          <option value="property">Crimes Against Property</option>
          <option value="society">Crimes Against Society</option>
          <option value="juvenile">Juvenile Crimes</option>
        </select>

        {/* <p>
          <label htmlFor="record-info" style={{ fontWeight: 'bold' }}>Enter {searchType}: </label> <br />
          <input type="text" placeholder={searchType + ' of the record'} id='record-info' />
        </p> */}

        <button type="button" style={{ width: '100%' }} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add record
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Criminal Record</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body add-modal">


                <p>
                  <label htmlFor="add-gender" style={{ fontWeight: 'bold' }}>Gender:</label>
                  <select id="add-gender" name="add-gender"
                    style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: '400' }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </p>

                <p>
                  <label htmlFor="add-age" style={{ fontWeight: 'bold' }}>Age:</label>
                  <select id="add-age" name="add-age"
                    style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: '400' }}>
                    <option value="0-20">0-20</option>
                    <option value="20-30">20-30</option>
                    <option value="30-40">30-40</option>
                    <option value="40-50">40-50</option>
                    <option value=">50">greater than 50</option>
                  </select>
                </p>

                <p>
                  <label htmlFor="add-faceshape" style={{ fontWeight: 'bold' }}>Face Shape:</label>
                  <select id="add-faceshape" name="add-faceshape"
                    style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: '400' }}>
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                    <option value="oval">Oval</option>
                    <option value="heart">Heart</option>
                    <option value="round">Round</option>
                    <option value="triangle">Triangle</option>
                    <option value="diamond">Diamond</option>
                    <option value="rectangle">Rectangle</option>
                  </select>
                </p>

                <p>
                  <label htmlFor="add-dob" style={{ fontWeight: 'bold' }}>Date of Birth:</label>
                  <input name="add-dob" id='add-dob' type="date" />
                </p>

                <p>
                  <label htmlFor='add-skincolor'>Skin color:</label>
                  <input name="add-skincolor" id='add-skincolor' type="text" placeholder="Tanned with minimal makeup" />
                </p>


                <p>
                  <label htmlFor='add-eyestype'>Eyes:</label>
                  <input name="add-eyestype" id='add-eyestype' type="text" placeholder="Hazel, almond-shaped" />
                </p>

                <label>Hair</label>
                <input
                  name="hair"
                  type="text"
                  placeholder="Shoulder-length, blonde, and wavy"
                />


              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
