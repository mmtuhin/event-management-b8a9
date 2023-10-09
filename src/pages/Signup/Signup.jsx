import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePhoto = e.target.profilePhoto.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      setErr(
        "Password must be at least 6 characters long, contain at least one capital letter, and contain at least one special character."
      );
      toast.error(err);
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);
        updateUser(name, profilePhoto)
          .then(() => {
            toast.success("User created Successfully!");
            navigate("/");
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSignup}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              id="username"
              placeholder="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              required
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profilePhoto"
            >
              Profile Image
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="profilePhoto"
              id="profilePhoto"
              placeholder="image link..."
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
              id="password"
              type="password"
              placeholder="minumum 6 digit"
              required
            />
            <label className="label">
              <p  className="label-text-alt link link-hover">
                <Link to="/login">Have an account? <span className="font-bold text-lime-700">LOGIN</span></Link>
              </p>
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
      </div>
    </div>
  );
};

export default Signup;
