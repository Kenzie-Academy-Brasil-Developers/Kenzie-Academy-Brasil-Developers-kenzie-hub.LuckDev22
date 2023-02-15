import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const AutoLogin = async () => {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          setUser(response.data);
          navigate("/home");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
        }
      };
      AutoLogin();
    }
  }, []);

  // Login

  const userLogin = async (data) => {
    try {
      const response = await Api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/home");
      toast.success(`${response.data.user.name} Bem Vindo!!!`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
  };

  //register

  const registerUser = async (data) => {
    try {
      const response = await Api.post("/users", data);
      toast.success(`Usuario ${response.data.name} cadastrado com sucesso!`);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
