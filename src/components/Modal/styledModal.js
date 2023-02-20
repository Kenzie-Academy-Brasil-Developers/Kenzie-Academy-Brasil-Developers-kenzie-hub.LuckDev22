import styled from "styled-components";

export const StyledModal = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

.modalContainer{
  position: fixed;
  top: 30%;
}

  .divTitle {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 12px 20px;
    h2 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 24px;
    }
    button {
      color: #868e96;
      font-weight: 600;
      font-size: 1rem;
      line-height: 26px;
      
    }
  }

  form {
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    background: #212529;

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 12px;

      label {
        font-weight: 400;
        font-size: 0.75rem;
      }

      input,
      select {
        padding: 0px 18px;
        height: 48px;

        /* grey-2 */

        background: #343b41;
        /* grey-0 */
        color: #f8f9fa;
        border: 1.2px solid #f8f9fa;
        border-radius: 4px;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 80px;
      height: 48px;

      /* color-primary */

      background: #ff577f;
      /* color-primary */

      border: 1.2px solid #ff577f;
      border-radius: 4px;
      font-weight: 500;
      font-size: 1rem;

      color: #ffffff;
      margin-bottom: 15px;
    }
  }
  .button {
    display: flex;
    gap: 22px;
  }

  .btnUpdate {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;

    height: 48px;

    /* color-primary-Disable */

    background: #59323f;
    /* color-primary-Disable */

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-weight: 500;
font-size: 1rem;
/* identical to box height, or 165% */


color: #FFFFFF;

  }

  .btnRemove {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10.15px;
    height: 48px;

    /* grey-1 */

    background: #868e96;
    /* grey-1 */

    border: 1.2px solid #868e96;
    border-radius: 4px;
    font-weight: 500;
font-size: 1rem;



color: #FFFFFF;
  }
`;
