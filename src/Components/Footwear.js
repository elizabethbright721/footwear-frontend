import { Link } from "react-router-dom";

function Footware({footwear}) {

  
  return (
    <div className="footwear-details">
     <Link className="decor" to={`/footwears/${footwear.id}`}>
     <p>
        {footwear.is_trending ? (
          <span className="badge">Trending🔥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </p>
      <img src={footwear.image} />
      <p>{footwear.name}</p>
      
      <p className="bold">${footwear.cost}</p>
      
      </Link>
    </div>
  );
}

export default Footware;