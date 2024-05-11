import useGameSaveModalAtom from "../../atoms/useGameSaveModalAtom";
import Button from "../@base/Button";
import Message from "../@base/Message";
import Modal from "../@base/Modal";
import useGridSizeAtom from "../../atoms/useGridSizeAtom";

export default function GameSaveModal() {
  const { isOpen, close } = useGameSaveModalAtom();
  const { requestResizing } = useGridSizeAtom();
  const onClick = () => {
    requestResizing();
    close();
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <Message>
        게임이 저장되었습니다. 복사된 URL을 붙여넣기 하면 다시 시작할 수
        있습니다.
      </Message>
      <Button onClick={onClick}>처음부터 시작</Button>
    </Modal>
  );
}
