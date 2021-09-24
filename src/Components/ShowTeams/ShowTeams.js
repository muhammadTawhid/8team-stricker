import React from "react";
import { useHistory } from "react-router";

const ShowTeams = (props) => {
  const { strTeamBadge, strTeam, strSport } = props.team;

  const history = useHistory();
  const showDetails = (name) => {
    const url = `team/${name}`;
    history.push(url);
  };
  return (
    <div className="col-md-3 d-flex justify-content-center">
      <div className="card p-3 m-3 shadow border-0 " style={{ width: "15rem" }}>
        <img src={strTeamBadge} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            <b>{strTeam}</b>
          </h4>
          <p className="card-text">
            <b>{strSport}</b>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => showDetails(strTeam)}
          >
            <b>More Details -&gt;</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowTeams;
