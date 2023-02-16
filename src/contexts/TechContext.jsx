import { createContext, useEffect, useState } from "react";
import { Api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    if (userId) {
      const getTechs = async () => {
        try {
          const response = await Api.get(`/users/${userId}`);
          console.log(response.data.techs);
          setTechs(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      getTechs();
    }
  }, []);

  const createTech = async () => {
    try {
      const response = await Api.get("/users/techs", formDataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ techs }}>{children}</TechContext.Provider>
  );
};
