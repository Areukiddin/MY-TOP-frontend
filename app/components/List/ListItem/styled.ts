import { styled } from "@linaria/react";

const ItemContainer = styled.li`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

export { ItemContainer, ItemName };
