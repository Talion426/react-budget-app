import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledSubmit = styled.button`
  padding: 15px 0;

  color: #fff;

  background-color: ${Color.DarkBlue};
  border-radius: 10px;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${Color.Blue};
  }
`;
