import {
  checkBalloon,
  placeBalloons,
  popBalloon,
  searchBalloons,
} from "../shared/lib/balloonGame";
import { atom, useAtomValue, useSetAtom } from "jotai";

const balloonsAtom = atom<BalloonCellInfo[]>([]);
const balloonGroupsAtom = atom<number[][]>([]);

const generateBalloonsAtom = atom(
  null,
  (_, set, { columns, rows }: GridSize) => {
    const newBalloons = placeBalloons({ columns, rows });
    set(balloonsAtom, newBalloons);
    set(balloonGroupsAtom, searchBalloons(newBalloons));
  }
);

const checkBalloonAtom = atom(null, (get, set, balloonIndex: number) => {
  const balloonGroups = get(balloonGroupsAtom);
  const balloons = get(balloonsAtom);

  const { clickedBalloonGroup, success } = checkBalloon(
    balloonGroups,
    balloonIndex
  );

  if (!success) return "lose";

  set(balloonsAtom, popBalloon(clickedBalloonGroup, balloons));

  const newBalloonGroups = balloonGroups.filter(
    (group) => group !== clickedBalloonGroup
  );

  set(balloonGroupsAtom, newBalloonGroups);

  if (newBalloonGroups.length === 0) return "win";
});

const useBalloonAtom = () => ({
  balloons: useAtomValue(balloonsAtom),
  generateBalloons: useSetAtom(generateBalloonsAtom),
  checkBalloon: useSetAtom(checkBalloonAtom),
});

export default useBalloonAtom;
