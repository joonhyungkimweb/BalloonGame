import { useCallback, useEffect } from "react";
import BalloonGridContainer from "../BalloonGrid/BalloonGridContainer";
import GameOverModal from "../GameOver/GameOverModal";
import GameStartModal from "../GameStart/GameStart";
import { loadGame } from "../../shared/lib/balloonGame";
import { NoSavedDataError } from "../../shared/constants/errors";
import useBalloonAtom from "../../atoms/useBalloonAtom";
import useGameOverModalAtom from "../../atoms/useGameOverModalAtom";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";

export default function BalloonGame() {
  const { isResizing, resize, requestResizing } = useGridSizeAtom();
  const { open, close } = useGameOverModalAtom();
  const { setBalloons, generateBalloons, checkBalloon } = useBalloonAtom();

  const onRestart = useCallback(() => {
    requestResizing();
    close();
  }, [requestResizing, close]);

  const onBalloonClick = useCallback(
    (index: number) => {
      const result = checkBalloon(index);
      if (result == null) return;
      open(result);
    },
    [open, checkBalloon]
  );

  useEffect(() => {
    const urlQueries = new URLSearchParams(location.search);
    const savedGame = urlQueries.get("saved");
    try {
      if (savedGame == null) throw new NoSavedDataError();

      const { balloonInfos, gridSize } = loadGame(savedGame);
      resize(gridSize);
      setBalloons(balloonInfos);
    } catch (e) {
      requestResizing();
    }
  }, [requestResizing, resize, setBalloons]);

  return isResizing ? (
    <GameStartModal onResize={generateBalloons} />
  ) : (
    <>
      <GameOverModal onClick={onRestart} />
      <BalloonGridContainer onBalloonClick={onBalloonClick} />
    </>
  );
}
