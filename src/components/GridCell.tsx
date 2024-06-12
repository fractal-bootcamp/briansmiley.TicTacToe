import { CellValue } from "./Grid";

type GridCellProps = {
  cellValue: CellValue;
  cellSetter: () => void;
};

const GridCell = ({ cellValue, cellSetter }: GridCellProps) => {
  return <button onClick={cellSetter}>{cellValue}</button>;
};

export default GridCell;
