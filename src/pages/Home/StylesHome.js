import styled from "styled-components";

export const StyledHomePage = styled.section`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 18px;

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }
  }

button{
  font-size: 32px;
  color: var(--color-white);
}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

  section {
    display: flex;
    justify-content: space-between;

    border: solid 1px var(--grey-0) h2 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 28px;
    }
    h3 {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 22px;
      color: var(--grey-1);
    }
  }

  section:nth-child(3) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 18px;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    p:nth-child(2) {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;
