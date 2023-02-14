import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .headerBetween {
    justify-content: space-between;
    align-items: center;
    max-width: 380px;
  }

  h1 {
    color: var(--color-primary);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background: var(--grey-3);
    color: var(--color-white);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 17px;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
