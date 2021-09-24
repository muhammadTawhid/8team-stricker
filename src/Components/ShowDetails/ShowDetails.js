import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailInfo from "../DetailInfo/DetailInfo";

const ShowDetails = () => {
  const { name } = useParams();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams.slice(0, 1)));
  }, []);
  return (
    <div>
      {team.map((teamInfo) => (
        <DetailInfo teamInfo={teamInfo} />
      ))}
    </div>
  );
};

export default ShowDetails;
