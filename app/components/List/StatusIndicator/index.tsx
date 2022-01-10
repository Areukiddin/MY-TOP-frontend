import React from "react";
import { StyledIndicatorProps } from "../types";
import { Indicator } from "./styled";

const StatusIndicator: React.FC<StyledIndicatorProps> = ({ color }) => (
  <Indicator color={color} />
);

export default StatusIndicator;
