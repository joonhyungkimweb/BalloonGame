import GridContainer from "../base/GridContainer";
import BalloonGridCell from "./BalloonGridCell";

type BalloonGridContainerProps = GridSize & {
  balloons: BalloonCellInfo[];
};

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
          key={`grid-cell-${balloon.coordinates.row}-${balloon.coordinates.column}`}
        />
      ))}
    </GridContainer>
  );
}

export default BalloonGridContainer;
