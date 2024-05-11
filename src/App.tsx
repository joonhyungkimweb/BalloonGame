import BalloonGridContainer from "./components/BalloonGrid/BalloonGridContainer";
import useBalloonGrid from "./hooks/useBalloonGrid";
import GameOverModal from "./components/GameOver/GameOverModal";
import useGameOverModalAtom from "./atoms/useGameOverModalAtom";
import AppMain from "./components/Layout/AppMain";
import GameStart from "./components/GameStart/GameStart";
import { useCallback } from "react";
import useGridSizeAtom from "./atoms/useGridSizeAtom";

function App() {
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
    <AppMain>
      {isResizing ? (
        <GameStart onResize={generateBalloons} />
      ) : (
        <>
          <GameOverModal onClick={onRestart} />
          <BalloonGridContainer
            balloons={balloons}
            onBalloonClick={onBalloonClick}
          />
        </>
      )}
    </AppMain>
  );
}

export default App;
