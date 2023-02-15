import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const navigator = useNavigate();

  useEffect(() => {
    if (!user) {
      navigator("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
};
