/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BalloonGridContainer from "./components/BalloonGrid/BalloonGridContainer";
import useBalloonGrid from "./hooks/useBalloonGrid";
import GameOverModal from "./components/GameOver/GameOverModal";
import useGameOverModalAtom from "./atoms/useGameOverModalAtom";

const DEFAULT_GRID_SIZE = {
  columns: 6,
  rows: 6,
};

function App() {
  const { open, close } = useGameOverModalAtom();
  const onLose = () => open("lose");
  const onWin = () => open("win");

  const {
    balloons,
    gridSize: { columns, rows },
    onBalloonClick,
    generateBalloons,
  } = useBalloonGrid({
    size: DEFAULT_GRID_SIZE,
    onLose,
    onWin,
  });

  const onModalClick = () => {
    generateBalloons();
    close();
  };

  return (
    <main
      css={css`
        width: 100%;
        height: 100%;
        padding: 1rem;
      `}
    >
      <GameOverModal onClick={onModalClick} />
      <BalloonGridContainer
        columns={columns}
        rows={rows}
        balloons={balloons}
        onBalloonClick={onBalloonClick}
      />
    </main>
  );
}

export default App;
