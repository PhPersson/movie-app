// Philip Persson al4570

import React from 'react'

const EditRows =( {team,  editTeamData}) => {

  return (
    <tr>
        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets namn"
            name = "teamName"
            value={editTeamData.teamName}
            ></input>
        </td>


        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets posistion i Serie A"
            name = "pos"
            value={editTeamData.pos}
            ></input>
        </td>
        <td>
            <input 
            type = "text"
            required = "required"
            placeholder = "Lagets stadium"
            name = "stadium"
            value={editTeamData.stadium}
            ></input>
        </td>

    </tr>
  );

};

export default EditRows