import styled from "styled-components";

export const StyledTechs = styled.section`
  background: #212529;
  border-radius: 4px;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    gap: 16px;
    padding: 22px 22px;
  }

  li {
    padding: 14px 21px;
    background: #121214;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
  }

  li:focus {
    background: #343b41;
    border-radius: 4px;
  }

  li:hover {
    background: #343b41;
    border-radius: 4px;
  }
`;
