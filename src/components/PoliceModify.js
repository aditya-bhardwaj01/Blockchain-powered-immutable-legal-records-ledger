import React from 'react'

export default function PoliceModify() {
  return (
    <div className='PoliceModify' style={{ padding: '10vh 16vh', textAlign: 'center' }}>
      <div className="search-form">
        <h4 style={{ textAlign: 'center' }}>Modify Record</h4>
        <p>
          <label htmlFor="suspect-name">Name of the suspect: </label> <br />
          <input type="text" placeholder='Name of suspect' id='suspect-name' />
        </p>

        <p>
          <label htmlFor="suspect-dob">Date of Birth of Suspect: </label> <br />
          <input type="date" id='suspect-dob' />
        </p>

        <p>
          <label htmlFor="suspect-aadhar">Aadhar no of the suspect: </label> <br />
          <input type="text" placeholder='Aadhar no of the suspect' id='suspect-aadhar' />
        </p>

        <button type="button" style={{width: '100%'}} className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Modify
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
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
