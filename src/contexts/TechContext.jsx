import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [editTech, setEditTech] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    if (userId) {
      const getTechs = async () => {
        try {
          const response = await Api.get(`/users/${userId}`);
          setTechs(response.data.techs);
        } catch (error) {
          toast.error("Erro ao carregar Tecnologias!");
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
      setModalAdd(false);
      toast.success("Tecnologia adicionada com Sucesso!");
    } catch (error) {
      toast.error("Tecnologia já cadastrada!");
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
      setModalUpdate(false);
    } catch (error) {
      // toast.error("Falha ao remover tecnologia!");
    }
  };

  const updateTech = async (formTechUpdate, techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.put(`/users/techs/${techId}`, formTechUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTech = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, ...formTechUpdate };
        } else {
          return tech;
        }
      });
      toast.success("Tecnologia atualizada com Sucesso!");
      setTechs(newTech);
      setModalUpdate(false);
    } catch (error) {
      // toast.error("Falha ao atualizar tecnologia!");
      // verificar porque mesmo tendo sucesso na atualização da tecnologia aparece o toast de error
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        createTech,
        removeTech,
        updateTech,
        editTech,
        setEditTech,
        modalAdd,
        setModalAdd,
        modalUpdate,
        setModalUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
