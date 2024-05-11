/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import useGameOverModalAtom from "../../atoms/useGameOverModalAtom";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import { css } from "@emotion/react";
import GameStartModal from "../GameStart/GameStart";
import GameOverModal from "../GameOver/GameOverModal";
import BalloonGridContainer from "../BalloonGrid/BalloonGridContainer";
import useBalloonAtom from "../../atoms/useBalloonAtom";

export default function GameSection() {
  const { isResizing, requestResizing } = useGridSizeAtom();
  const { open, close } = useGameOverModalAtom();

  const { generateBalloons, checkBalloon } = useBalloonAtom();

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
