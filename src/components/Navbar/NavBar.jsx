import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(console.log("Logout Successfull"))
      .catch(console.log("Logout failed"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive, isPending }) => (
            <>
              <span className={isActive ? "active" : ""}><span className="font-semibold">Home</span></span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/career">
          {({ isActive, isPending }) => (
            <>
              <span className={isActive ? "active" : ""}>Career</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs">
          {({ isActive, isPending }) => (
            <>
              <span className={isActive ? "active" : ""}>Blogs</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup">
          {({ isActive, isPending }) => (
            <>
              <span className={isActive ? "active" : ""}>Sign Up</span>
            </>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">ProEvent Planners</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            
            <div className="avatar online">
              <div className="w-10 rounded-full">
                {user?.photoURL ? <img src={`${user.photoURL}`} alt=""/>: <img src={"../../defau.png"} alt=""/> }
              </div>
            </div>
            <p className="font-semibold">{user.displayName}</p>
            <button className="btn btn-neutral btn-sm" onClick={handleSignOut}>Logout</button>
          </div>
        ) : (
          <span className="btn">
            {" "}
            <Link to="/login">Log In</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
