import { CellValue } from "./Grid";

type GridCellProps = {
  cellValue: CellValue;
  cellSetter: () => void;
};

const GridCell = ({ cellValue, cellSetter }: GridCellProps) => {
  return (
    <div
      className="flex justify-center items-center w-[100px] h-[100px] border border-black bg-slate-400 rounded-none font-bold text-5xl"
      onClick={cellSetter}
    >
      {cellValue}
    </div>
  );
};

export default GridCell;
