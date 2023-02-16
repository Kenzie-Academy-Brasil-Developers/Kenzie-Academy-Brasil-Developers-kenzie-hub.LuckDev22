import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const createTech = async (formDataTech) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.post("/users/techs", formDataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, response.data]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTech = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia removida com Sucesso!");
      const newTech = techs.filter((tech) => tech.id !== techId);
      setTechs(newTech);
    } catch (error) {
      console.log(error);
    }
  };
  
  conts updateTech = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <TechContext.Provider value={{ techs, createTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};
