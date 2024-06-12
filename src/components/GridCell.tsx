import { CellValue } from "./Grid";

type GridCellProps = {
  cellValue: CellValue;
  cellSetter: () => void;
  gridIndex: number;
};


const GridCell = ({ cellValue, gridIndex, cellSetter }: GridCellProps) => {
  const onLeft = gridIndex % 3 === 0 ? "border-l-0" : "";
  const onRight = (gridIndex + 1) % 3 === 0 ? "border-r-0" : "";
  const onTop = gridIndex < 3 ? "border-t-0" : "";
  const onBottom = gridIndex > 5 ? "border-b-0" : "";

  const borderStyle = [onLeft, onRight, onTop, onBottom].join(" ");

  return (
    <div
      className={` ${borderStyle} flex justify-center items-center w-[100px] h-[100px] border border-black  rounded-none font-bold text-5xl`}

      onClick={cellSetter}
    >
      {cellValue}
    </div>
  );
};

export default GridCell;
