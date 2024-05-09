export const coordinateToIndexConverter =
  (cells: BalloonCellInfo[]) =>
  ({ column, row }: Coordinates) =>
    cells.findIndex(
      ({ coordinates }) =>
        coordinates.column === column && coordinates.row === row
    );

const directions = {
  left: { column: -1, row: 0 },
  right: { column: 1, row: 0 },
  up: { column: 0, row: -1 },
  down: { column: 0, row: 1 },
} as const;

export const cellMover = (cells: BalloonCellInfo[]) => {
  const convertCoordinatesToIndex = coordinateToIndexConverter(cells);

  return ({ column, row }: Coordinates, direction: keyof typeof directions) =>
    convertCoordinatesToIndex({
      column: column + directions[direction].column,
      row: row + directions[direction].row,
    });
};
