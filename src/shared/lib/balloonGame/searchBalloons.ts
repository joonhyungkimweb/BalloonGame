import { cellMover, coordinateToIndexConverter } from "../../utils/gridUtils";

const directions = ["up", "down", "left", "right"] as const;

export const searchBalloons = (gridCells: BalloonCellInfo[]) => {
  let visited: number[] = [];

  const visitCell = (index: number) => {
    visited = [...visited, index];
  };

  const moveCellTo = cellMover(gridCells);
  const convertCordinatesToIndex = coordinateToIndexConverter(gridCells);

  const search = (index: number, result: number[] = []): number[] => {
    const balloon = gridCells[index];

    if (balloon == null || !balloon.isBalloon || visited.includes(index))
      return result;

    visitCell(index);

    const moveAndSearch = (
      result: number[],
      direction: (typeof directions)[number]
    ) => search(moveCellTo(balloon.coordinates, direction), result);

    return directions.reduce(moveAndSearch, [...result, index]);
  };

  return gridCells
    .map(({ coordinates, isBalloon }) => {
      const currentIndex = convertCordinatesToIndex(coordinates);
      if (visited.includes(currentIndex) || !isBalloon) return;
      return search(currentIndex);
    })
    .filter((result) => result != null)
    .sort((a, b) => b.length - a.length);
};
