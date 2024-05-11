import { atom, useAtomValue, useSetAtom } from "jotai";
import { InvalidGridSizeError } from "../shared/constants/errors";
import { sizeChecker } from "../shared/utils/gridUtils";

const DEFAULT_SIZE = {
  columns: 6,
  rows: 6,
};

const checkSize = sizeChecker({
  minSize: 3,
  maxSize: 10,
});

const gridSizeAtom = atom<GridSize>(DEFAULT_SIZE);
const isResizingAtom = atom<boolean>(true);
const requestResizingAtom = atom(null, (_, set) => set(isResizingAtom, true));
const resizeAtom = atom(null, (_, set, size: GridSize) => {
  if (!checkSize(size)) throw new InvalidGridSizeError(size);
  set(gridSizeAtom, size);
  set(isResizingAtom, false);
});

const useGridSizeAtom = () => {
  return {
    gridSize: useAtomValue(gridSizeAtom),
    isResizing: useAtomValue(isResizingAtom),
    requestResizing: useSetAtom(requestResizingAtom),
    resize: useSetAtom(resizeAtom),
  };
};

export default useGridSizeAtom;
