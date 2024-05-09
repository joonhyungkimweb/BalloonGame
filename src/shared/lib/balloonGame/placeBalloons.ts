import { generateRandomArray } from "../../utils/arrayUtils";

const BALLOON_RATIO = 0.4;

const balloonCellMapper =
  (columns: number) =>
  (isBalloon: boolean, index: number): BalloonCellInfo => ({
    coordinates: {
      row: Math.floor(index / columns) + 1,
      column: (index % columns) + 1,
    },
    isBalloon,
  });

const placeBalloons = ({ columns, rows }: GridSize): BalloonCellInfo[] =>
  generateRandomArray(
    columns * rows,
    (_, index) => index < Math.floor(columns * rows * BALLOON_RATIO)
  ).map(balloonCellMapper(columns));

export default placeBalloons;
