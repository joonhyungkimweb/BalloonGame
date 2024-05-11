/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import useGameOverModalAtom from "../../atoms/useGameOverModalAtom";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import useBalloonGrid from "../../hooks/useBalloonGrid";
import { css } from "@emotion/react";
import GameStartModal from "../GameStart/GameStart";
import GameOverModal from "../GameOver/GameOverModal";
import BalloonGridContainer from "../BalloonGrid/BalloonGridContainer";

export default function GameSection() {
  const { isResizing, requestResizing } = useGridSizeAtom();
  const { open, close } = useGameOverModalAtom();
  const onLose = () => open("lose");
  const onWin = () => open("win");

  const { balloons, onBalloonClick, generateBalloons } = useBalloonGrid({
    onLose,
    onWin,
  });

  const onRestart = useCallback(() => {
    requestResizing();
    close();
  }, [requestResizing, close]);
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
          <BalloonGridContainer
            balloons={balloons}
            onBalloonClick={onBalloonClick}
          />
        </>
      )}
    </section>
  );
}
