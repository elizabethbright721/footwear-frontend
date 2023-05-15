import axios from "axios";
import { useState, useEffect } from "react";
import Footwear from "./Footwear.js";

const API = process.env.REACT_APP_API_URL;

function Footwears() {
  const [footwears, setFootwears] = useState([]);
  useEffect(() => {
    axios.get(`${API}/footwears`).then((response) => {
      setFootwears(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
  }, []);
  return (
    <div className="Bookmarks">
      <section>
       <div className="footware-content">
            {footwears.map((footwear) => {
              return <Footwear key={footwear.id} footwear={footwear} />;
            })}
          </div>
      </section>
    </div>
  );
}

export default Footwears;
