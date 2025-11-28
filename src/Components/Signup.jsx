import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignOut = () => {
  const { createUser } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // user created successfully

        const userTime = result.user?.metadata?.creationTime;

        const user = { email, userTime };
        fetch(
          "https://coffie-store-clinet-hltydeeek-rumon-islams-projects.vercel.app/user",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert("user created successfully");
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
          <h1 className="text-5xl font-bold">Sign Out</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handleFormSubmit}>
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
                <button className="btn btn-neutral mt-4 w-full">Login</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
