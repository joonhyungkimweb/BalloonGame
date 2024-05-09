export const shuffleArray = <ArrayType>(array: ArrayType[]): ArrayType[] =>
  [...array].sort(() => Math.random() - 0.5);

export const generateRandomArray = <ArrayType>(
  length: number,
  indexMapper: (value: unknown, index: number) => ArrayType
): ArrayType[] => shuffleArray(Array.from({ length }, indexMapper));
