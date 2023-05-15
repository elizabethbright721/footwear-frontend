import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function FootwearNewForm() {
  let navigate = useNavigate();

  const addFootwear = (newFootwear) => {
    axios
      .post(`${API}/footwears`, newFootwear)
      .then(
        (result) => {
          navigate(`/footwears/${result.data.id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [footwear, setFootwear] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
    is_trending: false,
  });

  const handleTextChange = (event) => {
    setFootwear({ ...footwear, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFootwear({ ...footwear, is_trending: !footwear.is_trending });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFootwear(footwear);
  };


return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={footwear.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Footwear"
          required
        />
         <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          type="number"
          required
          min="0"
          value={footwear.cost}
          onChange={handleTextChange}
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={footwear.url}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={footwear.category}
          placeholder="sneaker, heel, sandal, ..."
          onChange={handleTextChange}
        />
         <label htmlFor="image">Image Link:</label>
        <input
          id="image"
          type="text"
          name="image"
          value={footwear.image}
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
          checked={footwear.is_trending}
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

export default FootwearNewForm;
