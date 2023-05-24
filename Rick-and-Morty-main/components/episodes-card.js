
import React from "react";

export const EpisodesCard = ({ name, episode}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span>{name}</span>
      <span>{episode}</span>
    </div>
  );
};
