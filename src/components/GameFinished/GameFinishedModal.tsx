/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../base/Button";
import Message from "../base/Message";
import Modal from "../base/Modal";

type GameFinishedModalProps = {
  reason: "win" | "lose";
  onClick: () => void;
};

const messages = {
  win: "승리!",
  lose: "패배",
};

export default function GameFinishedModal({
  reason,
  onClick,
}: GameFinishedModalProps) {
  return (
    <Modal>
      <div
        css={css`
          background-color: white;
          padding: 2rem 4rem;
          border-radius: 0.5rem;
        `}
      >
        <Message message={messages[reason]} size="large" />
        <Button onClick={onClick} size="large">
          다시시작
        </Button>
      </div>
    </Modal>
  );
}
