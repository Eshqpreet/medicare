import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { BASE_URL } from "../../config.js"
import { authContext } from "../context/AuthContext.jsx"
import HashLoader from "react-spinners/HashLoader"

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',

  })

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (event) => {
    // console.log(formData)
    event.preventDefault();

    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "login Data");

      setLoading(false)
      toast.success(result.message);
      navigate('/home');

    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <div id="gooey" className="absolute top-5  transform -translate-x-1/2 lg:h-[30vw] lg:w-[30vw] md:h-[35vw] md:w-[35vw] h-[30vw] w-[30vw] rounded-[50%] blur-[20px] z-[-2]">
      </div>
      <section className="px-5 lg:px-0 loginPage">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Hello! <span className="text-primaryColor">
              Welcome
            </span> Back to Medicare
          </h3>

          <form className="py-4 md:py-0" onSubmit={submitHandler}>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email" value={formData.email}
                onChange={handleInputChange}
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[1leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                placeholder="Password"
                name="password" value={formData.password}
                onChange={handleInputChange}
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>

            <div className="mt-7">
              <button className="btn w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3" type="submit">
                {loading ? <HashLoader size={25} color="#ffffff" /> : "Login"}
              </button>
            </div>

            <p className="mt-5 text-textColor text-center ">
              Don't have an Account?
              <Link to="/register" className="text-primaryColor font-medium ml-1 hover:text-red-400">
                Register
              </Link>
            </p>
          </form>
        </div>

      </section>
      <div id="gooey" className="absolute bottom-3 right-[3%]  transform -translate-x-1/2 lg:h-[30vw] lg:w-[30vw] md:h-[35vw] md:w-[35vw] h-[40vw] w-[40vw] rounded-[50%] blur-[20px] z-[-2]">
      </div>
    </>
  )
}

export default Login