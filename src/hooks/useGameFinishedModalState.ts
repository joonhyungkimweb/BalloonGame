import { useCallback, useState } from "react";
import useModalState from "./useModalState";

type Reasons = "win" | "lose";

const useGameFinishedModalState = () => {
  const [reason, setReason] = useState<Reasons>("win");
  const { isOpen, close, open: openModal } = useModalState();

  const open = useCallback(
    (reason: Reasons) => {
      setReason(reason);
      openModal();
    },
    [openModal]
  );

  return {
    reason,
    isOpen,
    open,
    close,
  };
};

export default useGameFinishedModalState;
