import BalloonImg from "../@base/BalloonImg";
import Button from "../@base/Button";
import GridCell from "../@base/GridCell";

interface BalloonGridCellProps {
  cell: BalloonCellInfo;
  onClick: () => void;
}

export default function BalloonGridCell({
  cell: { coordinates, isBalloon = false, isPopped = false },
  onClick,
}: BalloonGridCellProps) {
  return (
    <GridCell coordinates={coordinates}>
      {isBalloon && (
        <Button
          variant="transparent"
          size="stretch"
          onClick={onClick}
          hidden={isPopped}
        >
          <BalloonImg />
        </Button>
      )}
    </GridCell>
  );
}
