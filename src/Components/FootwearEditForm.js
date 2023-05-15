import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function FootwearEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [footwear, setFootwear] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
    image: "",
    is_trending: false,
  });

  const updateFootwear = (updatedFootwear) => {
    axios
      .put(`${API}/footwears/${id}`, updatedFootwear)
      .then(
        () => {
          navigate(`/footwears/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setFootwear({ ...footwear, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFootwear({ ...footwear, is_trending: !footwear.is_trending });
  };

  useEffect(() => {
    axios.get(`${API}/footwears/${id}`).then(
      (response) => setFootwear(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFootwear(footwear, id);
  };
  return (
    <div className="New">
      <div><img src={footwear.image} /></div>
      
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
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={footwear.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Trending:</label>
        <input
          id="is_trending"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={footwear.is_trending}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/footwears/${id}`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default FootwearEditForm;
