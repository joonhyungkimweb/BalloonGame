export const balloonPopper =
  (balloonGroup: number[]) =>
  (ballons: BalloonCellInfo[]): BalloonCellInfo[] =>
    ballons.map((balloon, index) => ({
      ...balloon,
      isPopped: balloon.isPopped || balloonGroup.includes(index),
    }));

export const balloonChecker =
  ({
    onFailed,
    onSuccess,
  }: {
    onSuccess: (
      clickedBallonGroup: number[],
      newBalloonGroups: number[][]
    ) => void;
    onFailed: () => void;
  }) =>
  (balloonGroups: number[][], balloonIndex: number) => {
    const [largestBalloonGroup] = balloonGroups;
    const clickedBalloonGroup = balloonGroups.find((group) =>
      group.includes(balloonIndex)
    );

    if (clickedBalloonGroup?.length !== largestBalloonGroup.length)
      return onFailed();

    return onSuccess(
      clickedBalloonGroup,
      balloonGroups.filter((group) => group !== clickedBalloonGroup)
    );
  };
