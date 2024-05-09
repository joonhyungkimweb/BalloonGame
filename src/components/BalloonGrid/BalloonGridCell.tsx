import BalloonImg from "../base/BalloonImg";
import Button from "../base/Button";
import GridCell from "../base/GridCell";

interface BalloonGridCellProps {
  cell: BalloonCellInfo;
  onBalloonClick: (cordinates: Coordinates) => void;
}

export default function BalloonGridCell({
  cell: { coordinates, isBalloon = false },
  onBalloonClick,
}: BalloonGridCellProps) {
  return (
    <GridCell coordinates={coordinates}>
      {isBalloon && (
        <Button
          variant="transparent"
          size="stretch"
          onClick={() => onBalloonClick(coordinates)}
        >
          <BalloonImg />
        </Button>
      )}
    </GridCell>
  );
}
