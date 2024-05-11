export const extractInputValueFromForm = <InputNames extends string[]>(
  form: HTMLFormElement,
  ...inputNames: InputNames
): { [key in InputNames[number]]?: string } =>
  inputNames.reduce(
    (acc, inputName) => ({
      ...acc,
      [inputName]: form[inputName]?.value,
    }),
    {}
  );
