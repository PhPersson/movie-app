// Philip Persson al4570

import React, { Fragment, useState } from 'react';
import './css/Team.css';
import { nanoid } from 'nanoid';
import teamData from './Team-data.json';
import TeamsRows from './comps/TeamsRows';
import TeamEditRows from './comps/TeamEditRows';
import AddTeamForm  from './comps/AddTeamForm';
import DefualtTeamTable from './comps/DefualtTeamTable';



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
    setTeams(newTeams);
  };

  function deleteTeam (teamId) {

    const newTeams = [...teams]; //Skapar en kopia av arrayen teams

    const teamIndex = teams.findIndex((team) => team.id === teamId);
  
    newTeams.splice(teamIndex, 1);

    setTeams(newTeams);
  };

  const enableEditField = (event, team) => {
    event.preventDefault();
    setEditTeamId(team.id);

    const teamValues = {
      teamName: team.teamName,
      pos: team.pos,
      stadium: team.stadium,
    };

    setEditTeamData(teamValues);
  };
  



  const [editTeamId, setEditTeamId] = useState(null);

  // För att kunna temporärt spara ner datan som temet skall uppdateras med
  const [editTeamData, setEditTeamData] = useState({
    teamName: "",
    pos: "",
    stadium: "",
  });


  //DÖP OM
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...editTeamData};
    newFormData[fieldName] = fieldValue;
    setEditTeamData(newFormData);
  };






  return (
  <div className = "Team-container">
    <form className='team-form'>
      <table>
          <thead>
              <DefualtTeamTable/>
          </thead>
          <tbody>
            {teams.map( (team) => (
              <Fragment> 
                {editTeamId === team.id ? (
                  <TeamEditRows editTeamData={editTeamData}/>
                ) : (
                  <TeamsRows team={team} enableEditField = {enableEditField} handleEditFormChange={handleEditFormChange} deleteTeam = {deleteTeam}/>
  
                )}
                </Fragment>
                
            ))}
          </tbody>
      </table>
      </form>
      <div className='addDiv' >
              {/* För att lägga till ett nytt lag */}
      <AddTeamForm addTeamSubmit = {addTeamSubmit} addTeamChangeEventhandle = {addTeamChangeEventhandle}/> 
      </div>
  </div>
)};

export default Team;
