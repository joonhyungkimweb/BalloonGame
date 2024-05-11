export const popBalloon = (
  balloonGroup: number[],
  ballons: BalloonCellInfo[]
): BalloonCellInfo[] =>
  ballons.map((balloon, index) => ({
    ...balloon,
    isPopped: balloon.isPopped || balloonGroup.includes(index),
  }));

export const checkBalloon = (
  balloonGroups: number[][],
  balloonIndex: number
) => {
  const [largestBalloonGroup] = balloonGroups;
  const clickedBalloonGroup =
    balloonGroups.find((group) => group.includes(balloonIndex)) ?? [];

  if (clickedBalloonGroup?.length !== largestBalloonGroup.length)
    return {
      success: false,
      clickedBalloonGroup,
    };

  return {
    success: true,
    clickedBalloonGroup,
  };
};
