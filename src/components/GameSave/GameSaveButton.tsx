import useBalloonAtom from "../../atoms/useBalloonAtom";
import useGameSaveModalAtom from "../../atoms/useGameSaveModalAtom";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";
import { saveGame } from "../../shared/lib/balloonGame";
import { copyToClipboard } from "../../shared/utils/clipboardUtils";
import Button from "../base/Button";

export default function GameSaveButton() {
  const { open } = useGameSaveModalAtom();
  const { gridSize } = useGridSizeAtom();
  const { balloons } = useBalloonAtom();

  const onClick = async () => {
    const savedGame = saveGame(gridSize, balloons);
    await copyToClipboard(`${location.origin}?saved=${savedGame}`);
    open();
  };

  return (
    <Button size="small" variant="primary" onClick={onClick}>
      게임 저장하기
    </Button>
  );
}
