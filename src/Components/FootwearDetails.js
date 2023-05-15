import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footwears from "./Footwears.js";

const API = process.env.REACT_APP_API_URL;

function FootwearDetails() {
  const [footwear, setFootwear] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/footwears/${id}`)
      .then((response) => {
        setFootwear(response.data);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  }, [id]);

  const handleDelete = () => {
    alert("Are you sure you want to delete this footwear?")
    deleteFootwear();
  };

  const deleteFootwear = () => {
    axios
      .delete(`${API}/footwears/${id}`)
      .then(() => {
        navigate(`/`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  return (
    <article> 
      <h5>{footwear.name}</h5>  
       <div className="show-details">  
        <div>
         
          <img src={footwear.image} />
          {/* <h3>
            {footwear.is_trending ? <span>🔥</span> : null} </h3> */}
          
          <h4 className="bold">${footwear.cost}</h4>
          <h5>Shop here:
            <span>
              <a href={footwear.url} target="blank">{footwear.url}</a>
            </span>
          </h5>
        </div>
        <div>
          <br />
          <h6>Product Details</h6>
          <p>Type: {footwear.category}</p>
          <p>Style: style</p>
          <p>Color: color</p>
          <p>Release Date: date</p>
        </div>
        </div>
        <div className="showNavigation">
          <div>
            <Link to={`/`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/footwears/${footwear.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div> 
        
      </div>  
        <br />
        
        <h4>Related Products</h4>
        <div>
        <Footwears />
       
      </div>
      {/* <Reviews/> */}
    </article>

  );
}

export default FootwearDetails;