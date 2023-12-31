import styled from "styled-components";

import { ReactComponent as Heart } from "../../../assets/svg/favorite/Iconly.svg";

export const FavoritesWrap = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const HeartIconWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;
`;

export const HeartIcon = styled(Heart)`
  stroke: white;

  :hover & {
    stroke: yellow;
  }
`;
