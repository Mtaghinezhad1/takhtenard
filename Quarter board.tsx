import { View } from "react-native";
import React from "react";
import Point from "./Point";

const QuarterBoard = ({ pointIds, board, onPointPress }) => {
  return pointIds.map((pointId) => (
    <Point 
      key={pointId} 
      pointId={pointId} 
      value={board[pointId - 1]} 
      onPress={onPointPress} 
    />
  ));
};

export default QuarterBoard;
