import { atom, useAtomValue, useSetAtom } from "jotai";

const isOpenAtom = atom(false);

const openAtom = atom(null, (_, set) => set(isOpenAtom, true));

const closeAtom = atom(null, (_, set) => set(isOpenAtom, false));

const useGameSaveModalAtom = () => ({
  isOpen: useAtomValue(isOpenAtom),
  open: useSetAtom(openAtom),
  close: useSetAtom(closeAtom),
});

export default useGameSaveModalAtom;
