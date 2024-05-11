import { useCallback, useState } from "react";
import {
  balloonChecker,
  balloonPopper,
  placeBalloons,
  searchBalloons,
} from "../shared/lib/balloonGame";

type useBalloonGridParameters = {
  onLose: () => void;
  onWin: () => void;
};

const useBalloonGrid = ({ onLose, onWin }: useBalloonGridParameters) => {
  const [balloons, setBalloons] = useState<BalloonCellInfo[]>([]);
  const [balloonGroups, setBalloonGroups] = useState<number[][]>([]);

  const generateBalloons = useCallback(({ columns, rows }: GridSize) => {
    const newBalloons = placeBalloons({ columns, rows });
    setBalloons(newBalloons);
    setBalloonGroups(searchBalloons(newBalloons));
  }, []);

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
    onBalloonClick: checkBalloon,
  };
};
export default useBalloonGrid;
