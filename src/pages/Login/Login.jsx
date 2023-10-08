import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate() 

    const handleSignin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(() => {
          navigate(location?.state ? location.state : '/' )
          e.clearData()
        })
        .catch(err => console.log(err))
        
    }
    return (
        <div className="flex justify-center my-8">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSignin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          
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
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
              <Link to="/signup">New here? SIGN UP</Link>
              </a>
            </label>
          </div>
          <div className="flex items-center ">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
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

export default Login;