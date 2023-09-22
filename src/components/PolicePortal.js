import React, { useEffect, useState } from 'react';
import './style/PolicePortal.css';
import PoliceSearch from './PoliceSearch';
import PoliceModify from './PoliceModify';
import PoliceAdd from './PoliceAdd';

export default function PolicePortal() {
  const [posts, setPosts] = useState(['Constable', 'HeadConstable', 'ASI', 'SI', 'IP', 'ASP', 'DSP', 'SP', 'DIGP', 'IGP', 'ADGP', 'DGP']);
  const [addCriminal, setAddCriminal] = useState(true)
  const [modifyCriminal, setModifyCriminal] = useState(true)
  const [searchType, setSearchType] = useState("")

  const getPostFromId = () => {
    const policeid = sessionStorage.getItem("logindetail");
    return policeid;
  }

  const changeForm = (formType) => {
    setSearchType(formType)
  }

  useEffect(() => {
    // const post = getPostFromId();
    const post = 'ASI';
    const postInd = posts.indexOf(post);
    if (post < 2) {
      setAddCriminal(false);
      setModifyCriminal(false);
    }
    else if (post === 2) {
      setAddCriminal(true);
      setModifyCriminal(false);
    }
    else {
      setAddCriminal(true);
      setModifyCriminal(true);
    }
    // console.log(postInd)
  })
  return (
    <div className='PolicePortal'>
      <div className="buttonSection">
        <button type="button" className="btn btn-primary" onClick={() => changeForm('search')}>Search Record</button>
        {
          modifyCriminal &&
          <button type="button" className="btn btn-success" onClick={() => changeForm('modify')}>Modify Record</button>
        }
        {
          addCriminal &&
          <button type="button" className="btn btn-warning" onClick={() => changeForm('add')}>Add Record</button>
        }
      </div>

      <div className="formSection">
        {
          searchType === 'search' ? <PoliceSearch /> : searchType === 'modify' ? <PoliceModify /> : searchType === 'add' ? <PoliceAdd /> : <span></span>
        }
      </div>
    </div>
  )
}
