import React from "react";
import { STATUS_COLORS } from "../constants";
import StatusIndicator from "../StatusIndicator";
import { ListItemProps } from "../types";
import { ItemContainer, ItemName } from "./styled";

const ListItem: React.FC<ListItemProps> = ({ server }) => {
  const { name, status } = server;
  const color = STATUS_COLORS[status];

  return (
    <ItemContainer>
      <StatusIndicator color={color} />
      <ItemName>{name}</ItemName>
    </ItemContainer>
  );
};

export default ListItem;
