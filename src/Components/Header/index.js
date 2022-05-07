import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(`/`);
  };
  return (
    <header>
      <img
        src="https://static.tvmaze.com/images/tvm-header-logo.png"
        alt="tvmaze"
        className="headerLogo"
        onClick={goToHome}
      />
    </header>
  );
}
