import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledSpentCard = styled.div`
  padding: 20px;

  font-size: 20px;
  font-weight: 500;

  background-color: ${Color.Pink};
  border-radius: 10px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
