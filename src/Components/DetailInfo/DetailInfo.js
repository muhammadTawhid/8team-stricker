import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { Link } from "react-router-dom";

const DetailInfo = (props) => {
  const {
    strTeam,
    strTeamBadge,
    strAlternate,
    intFormedYear,
    strCountry,
    strGender,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strInstagram,
  } = props.teamInfo;

  let playerImg = strGender === "Male" ? male : female;

  return (
    <div
      style={{ backgroundColor: "#0a335c", padding: "0px 0px" }}
      className="container text-white"
    >
      <div className="card bg-dark text-white">
        <img
          style={{ maxHeight: "250px" }}
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhZGl1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <img
            style={{ maxHeight: "200px", marginLeft: "450px" }}
            src={strTeamBadge}
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#134d86",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
        className="d-flex p-4  "
      >
        <div className="w-100">
          <h4>{strAlternate}</h4>
          <p>Name:{strTeam}</p>
          <p>Founded at: {intFormedYear}</p>
          <p>Country: {strCountry}</p>
          <p>Gender: {strGender}</p>
        </div>
        <div className="d-flex justify-content-end">
          <img className="w-50" src={playerImg} alt="" />
        </div>
      </div>

      <div className="p-4">
        <p>{strDescriptionEN}</p>
        <div className="d-flex justify-content-center ">
          <Link className="text-white" to={strFacebook}>
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              className="m-3"
              icon={faFacebookSquare}
            />
          </Link>

          <Link className="text-white" to={strTwitter}>
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              className="m-3"
              icon={faTwitter}
            />
          </Link>

          <Link className="text-white" to={strInstagram}>
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              className="m-3"
              icon={faInstagramSquare}
            />
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DetailInfo;
