import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function FootwearEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [footware, setFootware] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
    image: "",
    is_trending: false,
  });

  const updateFootware = (updatedFootware) => {
    axios
      .put(`${API}/footwares/${id}`, updatedFootware)
      .then(
        () => {
          navigate(`/footwares/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setFootware({ ...footware, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFootware({ ...footware, is_trending: !footware.is_trending });
  };

  useEffect(() => {
    axios.get(`${API}/footwares/${id}`).then(
      (response) => setFootware(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFootware(footware, id);
  };
  return (
    <div className="New">
      <div><img src={footware.image} /></div>
      
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
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={footware.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Trending:</label>
        <input
          id="is_trending"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={footware.is_trending}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/footwares/${id}`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default FootwearEditForm;
