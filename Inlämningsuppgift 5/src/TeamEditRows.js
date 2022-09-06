import React from 'react'



const EditRows =( {

}) => {

  return (
    <tr>
        <td>
            <input
            type = "text"
            required = "required"
            placeholder = "Lagets namn"
            name = "teamName"
            ></input>
        </td>


        <td>
            <input
            type = "text"
            required = "required"
            placeholder = "Lagets posistion i Serie A"
            name = "pos"
            ></input>
        </td>
        <td>
            <input
            type = "text"
            required = "required"
            placeholder = "Lagets stadium"
            name = "stadium"
            ></input>
        </td>
        <button type="submit">Uppdatera</button>


    </tr>
  );

};

export default EditRows