import React from "react";

const PlaceList = (props) => {
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <li key={place.id} style={{ fontSize: "18px" }}>
          {place.title}{" "}
        </li>
      ))}
    </ul>
  );
};

export default PlaceList;
