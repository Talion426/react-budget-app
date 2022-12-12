import styled from "styled-components";
import { Color } from "../../config/color";

interface IProps {
  $isOverSpending: boolean;
}

export const StyledRemainingCard = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 500;
  color: ${(props: IProps) => (props.$isOverSpending ? "#ffffff" : "black")};

  background-color: ${(props: IProps) => (props.$isOverSpending ? Color.Red : Color.Viol)};
  border-radius: 10px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
