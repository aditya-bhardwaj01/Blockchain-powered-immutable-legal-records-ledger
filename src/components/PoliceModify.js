import React, { useState } from 'react'
import './style/PoliceModify.css';

export default function PoliceModify() {
  const [searchType, setSearchType] = useState('Record ID');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSearchType(selectedValue);
  }

  const fillModifyFields = () => {
    // document.getElementById('detail-1').value = 'detail1 detail1'
    // document.getElementById('detail-2').value = 'detail2 detail2'
  }

  const finalModify = () => {
    var detail1 = document.getElementById('detail-1').value;
    var detail2 = document.getElementById('detail-2').value;

    console.log(detail1, detail2)
  }


  return (
    <div className='PoliceModify' style={{ padding: '10vh 16vh', textAlign: 'center' }}>
      <div className="search-form">
        <h4 style={{ textAlign: 'center' }}>Modify Record</h4>


        <label htmlFor="modify-basis" style={{ fontWeight: 'bold' }}>Modify on the basis of:</label>
        <select id="modify-basis" name="modify-basis"
          onChange={handleSelectChange}
          style={{ width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: 'bold' }}>
          <option value="Record ID">Record ID</option>
          <option value="AADHAR Number">AADHAR Number</option>
        </select>

        <p>
          <label htmlFor="record-info" style={{ fontWeight: 'bold' }}>Enter {searchType}: </label> <br />
          <input type="text" placeholder={searchType + ' of the record'} id='record-info' />
        </p>

        <button type="button" style={{ width: '100%' }} className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={fillModifyFields}>
          Modify
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modify Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body modify-modal">
                <p>
                  <label htmlFor="detail-1">Detail-1</label>
                  <input type="text" name="detail-1" id="detail-1" />
                </p>

                <p>
                  <label htmlFor="detail-2">Detail-2</label>
                  <input type="text" name='detail-2' id='detail-2' />
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={finalModify}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
