// Philip Persson al4570
"use strict"; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


var raceScheduleApi = "https://ergast.com/api/f1/current.json"

function raceTable(props) {
  return (
    <div>
        <table>
          <thead>
            <tr>
              <td>Race</td>
            </tr>
          </thead>
        </table>


    </div>
  )
}
    
async function  fetchF1Api(query) {
  const response =  await fetch(raceScheduleApi)
    .then((response) => response.json())
    .then((data) => console.log(data.MRData.RaceTable.Races))
  
}

fetchF1Api();


ReactDOM.render(
  <fetchF1Api />,

  document.getElementById("root")
);


