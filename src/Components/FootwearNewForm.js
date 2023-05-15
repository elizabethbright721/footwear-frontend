import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function FootwareNewForm() {
  let navigate = useNavigate();

  const addFootware = (newFootware) => {
    axios
      .post(`${API}/footwares`, newFootware)
      .then(
        (result) => {
          navigate(`/footwares/${result.data.id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [footware, setFootware] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
    is_trending: false,
  });

  const handleTextChange = (event) => {
    setFootware({ ...footware, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFootware({ ...footware, is_trending: !footware.is_trending });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFootware(footware);
  };


return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={footware.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Footware"
          required
        />
         <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          type="number"
          required
          min="0"
          value={footware.cost}
          onChange={handleTextChange}
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={footware.url}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={footware.category}
          placeholder="sneaker, heel, sandal, ..."
          onChange={handleTextChange}
        />
         <label htmlFor="image">Image Link:</label>
        <input
          id="image"
          type="text"
          name="image"
          value={footware.image}
          placeholder="https://"
          pattern="http[s]*://.+"
          required
          onChange={handleTextChange}
        />
        <label htmlFor="is_trending">Trending:</label>
        <input
          id="is_trending"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={footware.is_trending}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default FootwareNewForm;
