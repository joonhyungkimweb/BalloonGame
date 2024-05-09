import { useCallback, useState } from "react";
import {
  balloonChecker,
  balloonPopper,
  placeBalloons,
  searchBalloons,
} from "../shared/lib/balloonGame";

const useBalloonGrid = ({ size: { columns, rows } }: { size: GridSize }) => {
  const [balloons, setBalloons] = useState<BalloonCellInfo[]>(
    placeBalloons({ columns, rows })
  );
  const [balloonGroups, setBalloonGroups] = useState<number[][]>(
    searchBalloons(balloons)
  );

  const generateBalloons = useCallback(
    () => setBalloons(placeBalloons({ columns, rows })),
    [columns, rows]
  );

  const popBalloons = useCallback(
    (balloonGroup: number[]) => setBalloons(balloonPopper(balloonGroup)),
    []
  );

  const onBalloonCheckSuccess = useCallback(
    (balloonGroup: number[], newBalloonGroups: number[][]) => {
      popBalloons(balloonGroup);
      setBalloonGroups(newBalloonGroups);
    },
    [popBalloons]
  );

  // TODO : 실패 시 처리 로직 구현
  const onCheckFailed = useCallback(() => {}, []);

  const checkBalloon = useCallback(
    (balloonIndex: number) =>
      balloonChecker({
        onFailed: onCheckFailed,
        onSuccess: onBalloonCheckSuccess,
      })(balloonGroups, balloonIndex),
    [balloonGroups, onBalloonCheckSuccess, onCheckFailed]
  );

  return {
    generateBalloons,
    balloons,
    gridSize: { columns, rows },
    onBalloonClick: checkBalloon,
  };
};
export default useBalloonGrid;
