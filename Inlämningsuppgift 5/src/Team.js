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
  function addTeamChangeEventhandle (event)  {
    event.preventDefault();

    const field = event.target.getAttribute("name"); //För att hämta name attributen från forms input
    const fieldValue = event.target.value;
    const newForm = { ...addTeamData};
    newForm[field] = fieldValue;

    setAddTeamData(newForm);
  };

  function addTeamSubmit (event) {
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


  function handleSaveBtn(event) {
    event.preventDefault();

    const editedTeam = {
      id : editedTeamData.id,
      teamName: editedTeamData.teamName,
      pos: editedTeamData.pos,
      stadium: editedTeamData.stadium
    };

    const newTeams = [...teams];

    const index = teams.findIndex((team) => team.id === editedTeamId);

    newTeams[index] = editedTeam;

    setTeams(newTeams);
    setEditedTeamId(null);

  };
  


  function enableEditField (event, team)  {
    event.preventDefault();
    setEditedTeamId(team.id); // För att veta vilket fält med team som skall uppdateras

    const teamValues = {
      id: team.id,
      teamName: team.teamName,
      pos: team.pos,
      stadium: team.stadium,
    };

    setEditedTeamData(teamValues);
  };
  



  const [editedTeamId, setEditedTeamId] = useState(null);

  // För att kunna temporärt spara ner datan som temet skall uppdateras med
  const [editedTeamData, setEditedTeamData] = useState({
    id: "",
    teamName: "",
    pos: "",
    stadium: "",
  });



  /// För att ändra om till editfältet
  function handleEditFormChange (event) {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...editedTeamData};
    newFormData[fieldName] = fieldValue;
    setEditedTeamData(newFormData);

  };






  return (
  <div className = "Team-container">
    <form className='team-form' onSubmit={handleSaveBtn}>
      <table>
          <thead>
              <DefualtTeamTable/>
          </thead>
          <tbody>
            {teams.map( (team) => ( // Gå igenom team för team. Om det tryckta team.id stämmer överrens så öppna fliken för att kunna redigera teamet. 
              <Fragment> 
                {editedTeamId === team.id ? (
                  <TeamEditRows handleEditFormChange={handleEditFormChange} editedTeamData={editedTeamData} />
                ) : (
                  <TeamsRows team={team} enableEditField = {enableEditField} deleteTeam = {deleteTeam}/>
  
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
