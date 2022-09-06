import React from 'react'


  const TeamRows = ({ team, deleteTeam, editTeam}) => {
    return (
    <tr>
      <td className='teamName'>{team.teamName}</td>
      <td>{team.pos}</td>
      <td>{team.stadium}</td>


      <button className='deleteButton' type="button" onClick={() =>  deleteTeam(team.id)}> Ta bort</button>
    
      <button className='updateButton' type="submit" onClick={() =>  editTeam(team.id)}    >Uppdatera</button>

    </tr>
    );
  };
  
  export default TeamRows