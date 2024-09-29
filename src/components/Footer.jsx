import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <Link to="/" className="home-hover">
        Home
      </Link>
      <Link to="/blue" className="blue-hover">
        Blue
      </Link>
      <Link to="/red" className="red-hover">
        Red
      </Link>
      <Link to="/green" className="green-hover">
        Green
      </Link>
      <Link to="/orange" className="orange-hover">
        Orange
      </Link>
      <Link to="/cyan" className="cyan-hover">
        Cyan
      </Link>
    </div>
  );
}
