import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 500px;
  padding: 30px 20px;

  @media (max-width: 390px) {
    width: 300px;
  }
`;
