import { Link } from "react-router-dom";

export const Header = ({ to, children, logout }) => {
  return (
    <header>
      <h1>Kenzie Hub</h1>
      <Link to={to}>{children}</Link>{" "}
    </header>
  );
};
