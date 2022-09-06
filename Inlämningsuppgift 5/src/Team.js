import React, { Fragment, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import teamData from './Team-data.json';
import TeamsRows from './TeamsRows';
import TeamEditRows from './TeamEditRows';




const Team = () => {

  const [teams, setTeams] = useState(teamData);

  const [addTeamData, setAddTeamData] = useState({
    //samma namn som inputs name
    teamName: '',
    pos: '',
    stadium: ''
  })

  // Eventhandler funktion för att hantera varje gång knappen för ett lägga till ett nytt lag trycks.
  const addTeamChangeEventhandle = (event) => {
    event.preventDefault();

    const field = event.target.getAttribute("name"); //För att hämta name attributen från forms input

    const fieldValue = event.target.value;

    const newForm = { ...addTeamData};
    newForm[field] = fieldValue;

    setAddTeamData(newForm);
  };

  const addTeamSubmit = (event) => {
    event.preventDefault();

    const newTeam = {
      id : nanoid(),
      teamName: addTeamData.teamName,
      pos: addTeamData.pos,
      stadium: addTeamData.stadium
    };

    const newTeams = [...teams, newTeam]
    setTeams(newTeams)
  };

const deleteTeam = (teamId) => {
  console.log("Ta bort")
  const newTeams = [...teams]; //Skapar en ny kopa av arrayen

  const teamIndex = teams.findIndex((team) => team.id === teamId);
  
  newTeams.splice(teamIndex, 1)

  setTeams(newTeams)
};




  return (
  <div className = "Team-container">
      <table>
          <thead>
              <tr>

                  <th>Team</th>                        
                  <th>Posistion in Serie A</th>                        
                  <th>Stadium</th>

              </tr>
          </thead>
          <tbody>
            {teams.map( (team) => (
              <Fragment>


                  <TeamsRows team={team} deleteTeam = {deleteTeam}
                  />
                  <TeamEditRows team = {team} 
                  
                  />

                </Fragment>
            ))}
          </tbody>
      </table>

      <h2>Lägg till nytt lag</h2>
      <form onSubmit={addTeamSubmit}>
        <input type="text" name="teamName" required="required" placeholder='Lagets namn' onChange={addTeamChangeEventhandle}></input>
        <input type="text" name="pos" required="required" placeholder='Tabellplats' onChange={addTeamChangeEventhandle}></input>
        <input type="text" name="stadium" required="required" placeholder='Lagets stadium' onChange={addTeamChangeEventhandle}></input>
        <button type="submit"> Lägg till lag</button>
      </form>
  </div>
)};

export default Team;
