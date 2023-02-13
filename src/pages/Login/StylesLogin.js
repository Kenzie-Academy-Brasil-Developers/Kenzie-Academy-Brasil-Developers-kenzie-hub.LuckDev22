import styled from "styled-components";

export const StyledLoginPage = styled.section`
  width: 100%;
  max-width: 380px;
  padding: 10px;

  gap: 28px;
  background-color: var(--grey-3);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
        border: 1.2px solid var(--grey-0);
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
    margin-top: 18px;

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
    height: 40px;

    background: var(--color-primary);
    color: var(--grey-0);

    border: 1.2px solid var(--color-primary);
    border-radius: 4px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    width: 100%;
    height: 40px;

    background: var(--grey-1);
    color: var(--grey-0);

    border: 1.2px solid var(--grey-1);
    text-decoration: none;
    border-radius: 4px;
  }
`;
