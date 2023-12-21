import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main class="AuthPage">
      <h1 className="wholesome-harvest">Wholesome Harvest</h1>
      <br />
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}

      {showSignUp ? (
        <p className="center-text">Already registered?</p>
      ) : (
        <p className="center-text">Need to create an account?</p>
      )}

      <div className="center-text">
        <button onClick={() => setShowSignUp(!showSignUp)} className="btn-sm">
          {showSignUp ? "Log In!" : "Sign Up!"}
        </button>
      </div>
    </main>
  );
}
