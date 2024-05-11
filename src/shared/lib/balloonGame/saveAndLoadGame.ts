import { InvalidSaveDataError } from "../../constants/errors";
import { indexToCoordinates } from "../../utils/gridUtils";
import { parseNumericToNumber, searchString } from "../../utils/stringUtils";

const serializeBallon = ({ coordinates: { column, row } }: BalloonCellInfo) =>
  `c${column}r${row}`;

const serializeGridSize = ({ columns, rows }: GridSize) =>
  `cs${columns}rs${rows}`;

export const saveGame = (size: GridSize, balloons: BalloonCellInfo[]) =>
  `${serializeGridSize(size)}${balloons
    .filter(({ isBalloon, isPopped }) => isBalloon && !isPopped)
    .map(serializeBallon)
    .join("")}`;

const extractNumber = (source: string | string[], regex: RegExp) => {
  const matchedString = searchString(source, regex)?.match(/\d/);

  if (matchedString == null) throw new InvalidSaveDataError();

  return parseNumericToNumber(matchedString[0]);
};

export const loadGame = (savedGame: string) => {
  const sizeStrings = savedGame.match(/cs\d+|rs\d+/g);
  const balloonStrings = savedGame.match(/c\d+r\d+/g);

  if (sizeStrings == null || balloonStrings == null)
    throw new InvalidSaveDataError();

  const columnSize = extractNumber(sizeStrings, /cs\d+/);
  const rowSize = extractNumber(sizeStrings, /rs\d+/);
  const balloonInfos = Array.from(
    { length: columnSize * rowSize },
    (_, index) => ({
      coordinates: indexToCoordinates({
        index,
        columnSize,
      }),
    })
  ).map(({ coordinates }) => ({
    coordinates,
    isBalloon: !!balloonStrings.find(
      (str) => str === `c${coordinates.column}r${coordinates.row}`
    ),
  }));

  return {
    gridSize: {
      columns: columnSize,
      rows: rowSize,
    },
    balloonInfos: balloonInfos,
  };
};
