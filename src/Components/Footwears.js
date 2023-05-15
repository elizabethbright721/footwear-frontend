import axios from "axios";
import { useState, useEffect } from "react";
import Footwear from "./Footwear.js";

const API = process.env.REACT_APP_API_URL;

function Footwears() {
  const [footwares, setFootwares] = useState([]);
  useEffect(() => {
    axios.get(`${API}/footwares`).then((response) => {
      setFootwares(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
  }, []);
  return (
    <div className="Bookmarks">
      <section>
       <div className="footware-content">
            {footwares.map((footware) => {
              return <Footwear key={footware.id} footware={footware} />;
            })}
          </div>
      </section>
    </div>
  );
}

export default Footwears;
