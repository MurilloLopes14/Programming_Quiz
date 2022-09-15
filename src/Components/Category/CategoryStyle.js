import styled from "styled-components";

export const CategoryStyle = styled.div`
  text-align: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  & h2,
  p {
    margin-bottom: 1rem;
  }

  & p {
    color: var(--secondary-color);
  }

  & img {
    margin: 2rem auto;
    width: 300px;
  }

  & button {
    margin: 1rem;
  }
`;
