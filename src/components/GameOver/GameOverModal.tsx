import Button from "../base/Button";
import Message from "../base/Message";
import Modal from "../base/Modal";

type GameOverModalProps = {
  isOpen: boolean;
  reason: "win" | "lose";
  onClick: () => void;
};

const messages = {
  win: "승리!",
  lose: "패배",
};

export default function GameOverModal({
  reason,
  isOpen,
  onClick,
}: GameOverModalProps) {
  if (!isOpen) return null;
  return (
    <Modal>
      <Message message={messages[reason]} size="large" />
      <Button onClick={onClick} size="large">
        다시시작
      </Button>
    </Modal>
  );
}
