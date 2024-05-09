import { useCallback, useState } from "react";
import {
  balloonChecker,
  balloonPopper,
  placeBalloons,
  searchBalloons,
} from "../shared/lib/balloonGame";

type useBalloonGridParameters = {
  size: GridSize;
  onLose: () => void;
  onWin: () => void;
};

const useBalloonGrid = ({
  onLose,
  onWin,
  size: { columns, rows },
}: useBalloonGridParameters) => {
  const [balloons, setBalloons] = useState<BalloonCellInfo[]>(
    placeBalloons({ columns, rows })
  );
  const [balloonGroups, setBalloonGroups] = useState<number[][]>(
    searchBalloons(balloons)
  );

  const generateBalloons = useCallback(() => {
    const newBalloons = placeBalloons({ columns, rows });
    setBalloons(newBalloons);
    setBalloonGroups(searchBalloons(newBalloons));
  }, [columns, rows]);

  const popBalloons = useCallback(
    (balloonGroup: number[]) => setBalloons(balloonPopper(balloonGroup)),
    []
  );

  const onBalloonCheckSuccess = useCallback(
    (balloonGroup: number[], newBalloonGroups: number[][]) => {
      popBalloons(balloonGroup);
      setBalloonGroups(newBalloonGroups);
      if (newBalloonGroups.length === 0) return onWin();
    },
    [popBalloons, onWin]
  );

  const checkBalloon = useCallback(
    (balloonIndex: number) =>
      balloonChecker({
        onFailed: onLose,
        onSuccess: onBalloonCheckSuccess,
      })(balloonGroups, balloonIndex),
    [balloonGroups, onBalloonCheckSuccess, onLose]
  );

  return {
    generateBalloons,
    balloons,
    gridSize: { columns, rows },
    onBalloonClick: checkBalloon,
  };
};
export default useBalloonGrid;
