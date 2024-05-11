import { generateRandomArray } from "../../utils/arrayUtils";
import { indexToCoordinates } from "../../utils/gridUtils";

const BALLOON_RATIO = 0.4;

const balloonCellMapper =
  (columns: number) =>
  (isBalloon: boolean, index: number): BalloonCellInfo => ({
    coordinates: indexToCoordinates({
      columnSize: columns,
      index,
    }),
    isBalloon,
  });

const placeBalloons = ({ columns, rows }: GridSize): BalloonCellInfo[] =>
  generateRandomArray(
    columns * rows,
    (_, index) => index < Math.floor(columns * rows * BALLOON_RATIO)
  ).map(balloonCellMapper(columns));

export default placeBalloons;
