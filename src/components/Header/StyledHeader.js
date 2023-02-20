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

  .headerHome {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      width: 100%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 22px;
      height: 40px;
      background: var(--grey-3);
      color: var(--grey-0);
      border-radius: 4px;
    }
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
