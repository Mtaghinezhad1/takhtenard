import React from "react";
import Point from "./point";

const QuarterBoard = ({ pointIds, board, onPointPress }) => {
  return pointIds.map((pointId) => (
    <Point 
      key={pointId} 
      pointId={pointId} 
      value={board[pointId]} 
      onPress={onPointPress} 
    />
  ));
};

export default QuarterBoard;
