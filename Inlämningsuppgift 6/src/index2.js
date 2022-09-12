// Philip Persson al4570
"use strict"; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

var apiKey = 'aOFc77wHHBbSCu8gbnFxzBs2qxqsQQyxhsUReJq7'
var raceScheduleApi = "https://ergast.com/api/f1/current.json"

function CurrencyTable(props) {
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


    
async function  fetchCurrencyApi(query) {
  var requestURL = `https://api.watchmode.com/v1/search/?apiKey='${apiKey}'&search_field=name&search_value=${query}`;
    



  var responses = await Promise.all([
      fetch(requestURL),
    ])
    var body = await Promise.all(responses.map((response) => {
      return response.json();
    }))
    console.log(body);
  


}

fetchCurrencyApi('Batman');


ReactDOM.render(
  <fetchCurrencyApi />,

  document.getElementById("root")
);


