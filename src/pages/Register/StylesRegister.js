import styled from "styled-components";

export const StyledRegisterPage = styled.section`
  width: 100%;
  max-width: 380px;
  padding: 10px;

  gap: 28px;
  background-color: var(--grey-3);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 4px;
  
  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 28px;
  }

  form {
    width: 100%;
    background-color: var(--grey-3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    fieldset {
      width: 100%;
      gap: 15px;
      display: flex;
      flex-direction: column;

      input {
        padding: 0 16px;
        height: 48px;
        border-radius: 4px;
        border: 1.2px solid var(--grey-2);
        background: var(--grey-2);
        color: var(--grey-0);
      }
      label {
        color: var(--grey-0);
        font-weight: 400;
        font-size: 0.75rem;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      color: var(--grey-1);
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 18px;
    }
    display: flex;
    gap: 18px;
  }

  button {
    width: 100%;

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;

    background: #59323f;
    color: var(--grey-0);

    border: 1.2px solid #59323f;
    border-radius: 4px;
  }

  select {
    height: 40px;

    background: var(--grey-2);
    color: var(--grey-0);
    border: 1.2px solid var(--grey-2);
    padding: 10px;
    border-radius: 4px;
  }
`;
