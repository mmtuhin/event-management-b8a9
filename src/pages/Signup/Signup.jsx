import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
  const {createUser} = useContext(AuthContext)

  const handleSignup = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePhoto = e.target.profilePhoto.value;
    const password = e.target.password.value;
    
    createUser(email,password)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSignup} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="jhon@wick.com"
              required
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Profile Image
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="profilePhoto"
              placeholder="URL..."
              required
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border text-sm  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Minumum 6 digit"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                <Link to="/login">Have an account? LOGIN</Link>
              </a>
            </label>
          </div>
          <div className="flex items-center ">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Signup;
