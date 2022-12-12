import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  align-items: center;

  padding: 15px 20px;

  border-bottom: 2px solid #ccd5ff;

  @media (max-width: 390px) {
    padding: 12px 15px;

    font-size: 12px;
  }
`;

export const StyledItemText = styled.p`
  font-weight: 400;
  text-transform: lowercase;
`;

export const StyledItemBadge = styled.span`
  justify-self: center;

  padding: 3px 10px;

  font-size: 12px;
  color: #fff;

  background-color: ${Color.DarkBlue};
  border-radius: 10px;
`;

export const StyledDeleteButton = styled.div`
  position: relative;
  left: 20px;
  display: block;

  cursor: pointer;
`;
