/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BalloonGridContainer from "./components/BalloonGrid/BalloonGridContainer";
import useBalloonGrid from "./hooks/useBalloonGrid";

const DEFAULT_GRID_SIZE = {
  columns: 6,
  rows: 6,
};

function App() {
  const {
    balloons,
    gridSize: { columns, rows },
    onBalloonClick,
  } = useBalloonGrid({
    size: DEFAULT_GRID_SIZE,
  });

  return (
    <main
      css={css`
        width: 100%;
        height: 100%;
        padding: 1rem;
      `}
    >
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
