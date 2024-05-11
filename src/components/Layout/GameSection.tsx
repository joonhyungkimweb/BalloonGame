/** @jsxImportSource @emotion/react */
import { useCallback, useEffect } from "react";
import useGameOverModalAtom from "../../atoms/useGameOverModalAtom";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import { css } from "@emotion/react";
import GameStartModal from "../GameStart/GameStart";
import GameOverModal from "../GameOver/GameOverModal";
import BalloonGridContainer from "../BalloonGrid/BalloonGridContainer";
import useBalloonAtom from "../../atoms/useBalloonAtom";
import { loadGame } from "../../shared/lib/balloonGame";

export default function GameSection() {
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
      if (savedGame != null) {
        const { balloonInfos, gridSize } = loadGame(savedGame);
        resize(gridSize);
        setBalloons(balloonInfos);
        return;
      }
      requestResizing();
    } catch (e) {
      requestResizing();
    }
  }, [requestResizing, resize, setBalloons]);

  return (
    <section
      css={css`
        height: calc(100% - 3rem);
      `}
    >
      {isResizing ? (
        <GameStartModal onResize={generateBalloons} />
      ) : (
        <>
          <GameOverModal onClick={onRestart} />
          <BalloonGridContainer onBalloonClick={onBalloonClick} />
        </>
      )}
    </section>
  );
}
