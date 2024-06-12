import { useState } from "react";
export type CellValue = "X" | "O" | "";
export type Board = CellValue[];
type WinState = "X" | "O" | "T" | null;

const TicTacToe = () => {
  const [grid, setGrid] = useState<Board>(Array(9).fill(""));

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
    setGrid(
      grid.map((cell, boardIndex) =>
        boardIndex === cellIndex ? currentPlayer : cell
      )
    );
  };
};
