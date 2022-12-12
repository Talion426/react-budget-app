import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  padding: 20px;
  margin-bottom: 20px;

  background-color: ${Color.Blue};
  border-radius: 10px;
`;

export const StyledInput = styled.input`
  color: black;
  font-size: 20px;
  font-weight: 500;

  background-color: transparent;
  border: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus-visible {
    outline: none;
  }

  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 20px;

  background-color: #fff;
  border: none;
  border-radius: 10px;

  transition: 0.3s ease-in-out;

  cursor: pointer;

  &:disabled {
    &:hover {
      background-color: #fff;

      cursor: default;
    }
  }

  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
