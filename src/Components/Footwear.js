import { Link } from "react-router-dom";

function Footware({footware}) {

  
  return (
    <div className="footware-details">
     <Link className="decor" to={`/footwares/${footware.id}`}>
     <p>
        {footware.is_trending ? (
          <span className="badge">Trending🔥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </p>
      <img src={footware.image} />
      <p>{footware.name}</p>
      
      <p className="bold">${footware.cost}</p>
      
      </Link>
    </div>
  );
}

export default Footware;