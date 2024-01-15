import { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [userName, setUserName] = useState<any | null>(null);
  const [email, setEmail] = useState<any | null>(null);
  const [password, setPassword] = useState<any | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<any | null>(null);

  return (
    <>
      <div id="container">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </div>
    </>
  );
}

export default SignUp;
