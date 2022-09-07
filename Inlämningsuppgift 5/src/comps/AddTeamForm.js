// Philip Persson al4570

import React from 'react'
import '../css/AddTeamForm.css';

const AddTeamForm = ({addTeamSubmit, addTeamChangeEventhandle}) => {
  return (
    <><h2 className='AddTeam'>Lägg till nytt lag</h2>
    <form onSubmit={addTeamSubmit}>
      <input type="text" name="teamName" required="required" placeholder='Lagets namn' onChange={addTeamChangeEventhandle}></input>
      <input type="text" name="pos" required="required" placeholder='Tabellplats' onChange={addTeamChangeEventhandle}></input>
      <input type="text" name="stadium" required="required" placeholder='Lagets stadium' onChange={addTeamChangeEventhandle}></input>
      <button className='addBtn' type="submit"> Lägg till lag</button>
    </form></>
  );
}

export default AddTeamForm