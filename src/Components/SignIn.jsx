import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSIgnIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        // update last logged in the database
        fetch(
          "https://coffie-store-clinet-hltydeeek-rumon-islams-projects.vercel.app/user",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handleSIgnIn}>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4 w-full">
                  Sign In{" "}
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
