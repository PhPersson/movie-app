// Philip Persson al4570

import React from 'react'
import '../css/TeamEditRow.css'

const EditRows =( { handleEditFormChange, editTeamData}) => {

  return (
    <tr>
        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets namn"
            name = "teamName"
            value={editTeamData.teamName}
            onChange={handleEditFormChange}
            ></input>
        </td>


        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets posistion i Serie A"
            name = "pos"
            value={editTeamData.pos}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets stadium"
            name = "stadium"
            value={editTeamData.stadium}
            onChange={handleEditFormChange}
            ></input>
        </td>

        <td>
        <button className='editSaveButton' type="submit">Save</button>
        </td>

    </tr>
  );

};

export default EditRows