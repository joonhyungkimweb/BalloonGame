import useGameOverModalAtom from "../../atoms/useGameOverModalAtom";
import Button from "../base/Button";
import Message from "../base/Message";
import Modal from "../base/Modal";

type GameOverModalProps = {
  onClick: () => void;
};

export default function GameOverModal({ onClick }: GameOverModalProps) {
  const { message, isOpen } = useGameOverModalAtom();
  if (!isOpen) return null;
  return (
    <Modal>
      <Message message={message} size="large" />
      <Button onClick={onClick} size="large">
        다시시작
      </Button>
    </Modal>
  );
}
