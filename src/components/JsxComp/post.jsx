const Card = (usrname , spcltitle , message) => {
  <link></link>;
  return (
    <div className="post">
      <div className="card">
        <div className="card-header">{usrname}</div>
        <div className="card-body">
          <h5 className="card-title">{spcltitle}</h5>
          <p className="card-text">
            <p>{message}</p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
