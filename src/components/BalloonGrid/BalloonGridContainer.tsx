import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import GridContainer from "../base/GridContainer";
import BalloonGridCell from "./BalloonGridCell";

type BalloonGridContainerProps = {
  balloons: BalloonCellInfo[];
  onBalloonClick: (index: number) => void;
};

function BalloonGridContainer({
  balloons,
  onBalloonClick,
}: BalloonGridContainerProps) {
  const {
    gridSize: { columns, rows },
  } = useGridSizeAtom();
  return (
    <GridContainer rows={rows} columns={columns}>
      {balloons.map((balloon, index) => (
        <BalloonGridCell
          cell={balloon}
          onClick={() => onBalloonClick(index)}
          key={`grid-cell-${balloon.coordinates.row}-${balloon.coordinates.column}`}
        />
      ))}
    </GridContainer>
  );
}

export default BalloonGridContainer;
