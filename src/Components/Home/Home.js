import React, { useEffect, useState } from "react";
import ShowTeams from "../ShowTeams/ShowTeams";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  // console.log(teams);
  return (
    <div className="container">
      <img
        style={{ width: "200rem", height: "200px" }}
        src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        className="img-fluid"
        alt="..."
      />
      <br />
      <div className="row">
        {teams.map((team) => (
          <ShowTeams team={team} key={team.idTeam} />
        ))}
      </div>
    </div>
  );
};

export default Home;
