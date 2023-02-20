import styled from "styled-components";

export const StyledHomePage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 24px;

button{
  font-size: 2rem;
  color: var(--color-white);
}

  .userSection {
    display: flex;
    justify-content: space-between;
    padding: 45px 0px;
    width: 100%;
    border-top: solid 1px var(--grey-50);
    border-bottom: solid 1px var(--grey-50);

    h2 {
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
  .userData {
    display: flex;
    justify-content: space-between;
  }

section {
  width: 100%;
}

  section:nth-child(3) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 18px;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 28px;
    }
    p:nth-child(2) {
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;
