export const parseNumericToNumber = (value: string | undefined): number =>
  Number(value);

export const searchString = (source: string | string[], regex: RegExp) =>
  Array.isArray(source)
    ? source.find((str) => regex.test(str))
    : source.match(regex)?.[0];
