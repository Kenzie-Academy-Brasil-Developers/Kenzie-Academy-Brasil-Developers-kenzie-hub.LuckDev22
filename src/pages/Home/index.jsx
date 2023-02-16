import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { StyledHomePage } from "./StylesHome";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";

export const HomePage = () => {

  const { user, userLogout } = useContext(UserContext);
  const { techs } = useContext(TechContext);

  return (
    <>
      {user ? (
        <>   
            <StyledHomePage>
              <Header>
                <Link to="/" onClick={() => userLogout()}>
                  Sair
                </Link>
              </Header>
              <section>
                <h2>Olá, {user.name}</h2>
                <h3>{user.course_module}</h3>
              </section>
              <section>
                <div><h2>Tecnologias</h2> <button className="addTech">+</button></div>
                <ul>

        {techs.length > 0 ? (<>
          {techs.map((tech) => (
                  <li key={tech.id}> 
                    
                      <h2>{tech.title}</h2>
                      <h3>tech.status</h3>
                    
                  </li>
                ))}
        
        </>) :(<li></li>)  }

              
                </ul>
              </section>
            </StyledHomePage>
        </>
      ) : null}
    </>
  );
};
