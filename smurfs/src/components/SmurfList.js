import React from "react";
import Smurf from "./Smurf";

function SmurfList(props) {

  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf 
          smurf={smurf}
          id={smurf.id}
          key={smurf.name}
          deleteSmurf={props.deleteSmurf} />
      ))}
    </div>
  );
}


export default SmurfList;