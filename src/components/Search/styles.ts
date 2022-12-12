import styled from "styled-components";

export const StyledSearch = styled.input`
  padding: 20px 15px;

  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999999;
  }

  @media (max-width: 390px) {
    padding: 13px 10px;

    font-size: 12px;
  }
`;
