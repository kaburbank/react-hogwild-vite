import React from "react";

export default function HogDetails( { hog, ...props } ) {

  console.log("Hog Details:", hog);

  return (
    <>
      <div className="description">
        <p> <strong> {hog.greased ? "Greased" : "Nongreased" } </strong></p>
        <p> Specialty: {hog.specialty}</p>
        <p> Weight:<strong>{hog.weight} </strong></p>
        <p> Highest Medal Achieved:<strong>{hog["highest medal achieved"]} </strong> </p>
      </div>
    </>
  );
};