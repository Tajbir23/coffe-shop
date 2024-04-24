import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../components/config";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContextCoffee } from "../Root";


const Login = () => {
  const {user} = useContext(ContextCoffee)

  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      navigate("/")
    }
  },[user])

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/'))
    .catch((error) => alert(error.message))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login