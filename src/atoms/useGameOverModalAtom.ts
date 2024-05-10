import { atom, useAtomValue, useSetAtom } from "jotai";

type Reasons = "win" | "lose";
type ReasonMessages = {
  [key in Reasons]: string;
};

const messages: ReasonMessages = {
  win: "승리!",
  lose: "패배",
};

const isOpenAtom = atom(false);
const reasonAtom = atom<Reasons>("win");

const messageAtom = atom((get) => messages[get(reasonAtom)]);

const openAtom = atom(null, (_, set, reason: Reasons) => {
  set(isOpenAtom, true);
  set(reasonAtom, reason);
});

const closeAtom = atom(null, (_, set) => set(isOpenAtom, false));

const useGameOverModalAtom = () => ({
  isOpen: useAtomValue(isOpenAtom),
  message: useAtomValue(messageAtom),
  open: useSetAtom(openAtom),
  close: useSetAtom(closeAtom),
});

export default useGameOverModalAtom;
