import React from 'react'


  const TeamRows = ({ team, deleteTeam }) => {
    return (
    <tr>
      <td>{team.teamName}</td>
      <td>{team.pos}</td>
      <td>{team.stadium}</td>


      <button type="button" onClick={() =>  deleteTeam(team.id)}> Ta bort</button>
    
    </tr>
    );
  };
  
  export default TeamRows