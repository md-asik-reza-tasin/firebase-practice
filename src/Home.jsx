import { Link } from "react-router-dom";
import Login from "./Login";

export default function Home() {
  return (
    <div>
      <Link to='/login'>Log in</Link>
    </div>
  );
}
