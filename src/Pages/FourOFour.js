import { Link } from "react-router-dom";
export default function FourOFour () {
    return (
        <div className="fourofour">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, there is nothing to see here</p>
          <Link to={`/`}>
              <button>Home</button>
          </Link>
        </div>
    )      
  }