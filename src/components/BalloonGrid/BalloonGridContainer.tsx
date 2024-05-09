import GridContainer from "../base/GridContainer";
import BalloonGridCell from "./BalloonGridCell";

interface BalloonGridContainerProps {
  rows: number;
  columns: number;
  balloons: BalloonCellInfo[];
}

function BalloonGridContainer({
  rows,
  columns,
  balloons,
}: BalloonGridContainerProps) {
  return (
    <GridContainer rows={rows} columns={columns}>
      {balloons.map((balloon) => (
        <BalloonGridCell
          cell={balloon}
          // * TODO : 클릭 이벤트 핸들러 구현
          onBalloonClick={() => void 0}
          key={`grid-cell-${balloon.coordinates.x}-${balloon.coordinates.y}`}
        />
      ))}
    </GridContainer>
  );
}

export default BalloonGridContainer;
