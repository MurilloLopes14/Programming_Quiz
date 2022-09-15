import styled from "styled-components";

export const QuestionStyle = styled.div`
  text-align: center;
  max-width: 500px;
  background-color: var(--primary-color);
  border-radius: 1rem;
  padding: 2rem;

  & h2 {
    margin-bottom: 2rem;
  }

  & p {
    margin-bottom: 1rem;
  }

  & button {
    border: 2px solid aliceblue;
    margin: 0.5rem;
  }
`;
