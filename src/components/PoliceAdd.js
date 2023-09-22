import React from 'react'

export default function PoliceAdd() {
  return (
    <div className='PoliceAdd' style={{ padding: '10vh 16vh', textAlign: 'center' }}>
      <div className="search-form">
        <h4 style={{ textAlign: 'center' }}>Add Record</h4>

        <label htmlFor="crime-category" style={{fontWeight: 'bold'}}>Select the category:</label>
        <select id="crime-category" name="crime-category" style={{width: '100%', padding: '5px', margin: '10px 0', borderRadius: '5px', fontWeight: 'bold'}}>
          <option value="personal">Personal Crimes</option>
          <option value="financial">Financial Crimes</option>
          <option value="drug">Drug-Related Crimes</option>
          <option value="property">Crimes Against Property</option>
          <option value="society">Crimes Against Society</option>
          <option value="juvenile">Juvenile Crimes</option>
          
        </select>

        <button type="button" style={{ width: '100%' }} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add record
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
