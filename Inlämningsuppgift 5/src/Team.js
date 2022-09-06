import React, { Fragment, useState } from 'react';
import './Team.css';
import { nanoid } from 'nanoid';
import teamData from './Team-data.json';
import TeamsRows from './TeamsRows';
import TeamEditRows from './TeamEditRows';
import AddTeamForm  from './AddTeamForm';
import DefualtTeamTable from './DefualtTeamTable';



const Team = () => {

  const [teams, setTeams] = useState(teamData);

  const [addTeamData, setAddTeamData] = useState({
    //samma namn som inputs name
    teamName: '',
    pos: '',
    stadium: '',
  })







  // Eventhandlerfunktion för att hantera varje gång knappen för ett lägga till ett nytt lag trycks.
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

    const newTeams = [...teams]; //Skapar en kopia av arrayen teams (rad 13)

    const teamIndex = teams.findIndex((team) => team.id === teamId);
  
    newTeams.splice(teamIndex, 1)

    setTeams(newTeams)
  };




  const [editTeamData, setEditTeamData] = useState({
    teamName: '',
    pos: '',
    stadium: '',
  })

  const editTeam = (teamId) => {

  }


  return (
  <div className = "Team-container">
      <table>
          <thead>
              <DefualtTeamTable/>
          </thead>
          <tbody>
            {teams.map( (team) => (
              <Fragment>

                  <TeamsRows team={team} deleteTeam = {deleteTeam} editTeam={editTeam}/>
                  <TeamEditRows/>

                </Fragment>
            ))}
          </tbody>
      </table>
              {/* För att lägga till ett nytt lag */}
      <AddTeamForm addTeamSubmit = {addTeamSubmit} addTeamChangeEventhandle = {addTeamChangeEventhandle}/> 

  </div>
)};

export default Team;
