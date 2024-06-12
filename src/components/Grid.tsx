import { useState } from "react";
import GridCell from "./GridCell";

export type Player = "X" | "O";
export type CellValue = Player | "";
export type Board = CellValue[];
type WinState = Player | "T" | null;

const TicTacToe = () => {
  const [grid, setGrid] = useState<Board>(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);

  const winState = (b: Board): WinState => {
    /** Set of board space combinations that constitute a winning trio */
    const winningTriples = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8]
    ];

    for (const trio of winningTriples) {
      const trioWinner = trio.reduce(
        (acc, curr) => (b[curr] === acc ? acc : ""),
        b[trio[0]]
      );
      //if we hit a trio that is all X or O, return that char as the winner
      if (trioWinner === "X" || trioWinner === "O") return trioWinner;
    }
    /**Otherwise, there is no winner, and we have a tie if the board is full */
    return b.some(cell => cell === "") ? null : "T";
  };

  const cellSetter = (cellIndex: number) => {
    /**Do nothing if the cell is already populated */
    if (grid[cellIndex] != "") return;
    /**Set the appropriate grid cell to current player char */
    setGrid(
      grid.map((cell, boardIndex) =>
        boardIndex === cellIndex ? (xTurn ? "X" : "O") : cell
      )
    );
    /**We made a move so switch current player */
    setXTurn(!xTurn);
  };
  return (
    <div className="flex flex-wrap w-[300px] h-[300px]">
      {grid.map((cellValue, cellIndex) => (
        <GridCell
          cellValue={cellValue}
          cellSetter={() => cellSetter(cellIndex)}
          key={cellIndex}
        />
      ))}
    </div>
  );
};
export default TicTacToe;
