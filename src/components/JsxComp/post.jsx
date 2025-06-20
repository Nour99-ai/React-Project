import React from "react";

const Card = ({ usrname, spcltitle, message }) => {
  return (
    <div className="postContainer">
      <div className="post">
        <div className="card">
          <div className="cardHeader">{usrname}</div>
          <div className="cardBody">
            <h5 className="cardTitle">{spcltitle}</h5>
            <p className="cardText">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
