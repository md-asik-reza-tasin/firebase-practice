import { Link, Outlet } from "react-router-dom";
import Login from "./Login";
import Header from "./assets/Header";

export default function Home() {
  return (
    <div>
      {/* <Link to='/login'>Log in</Link> */}
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
