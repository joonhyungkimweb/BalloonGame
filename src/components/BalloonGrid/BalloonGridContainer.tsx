import GridContainer from "../base/GridContainer";
import BalloonGridCell from "./BalloonGridCell";

type BalloonGridContainerProps = GridSize & {
  balloons: BalloonCellInfo[];
  onBalloonClick: (index: number) => void;
};

function BalloonGridContainer({
  rows,
  columns,
  balloons,
  onBalloonClick,
}: BalloonGridContainerProps) {
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
