/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./Button";
import { NumberField, TextField } from "./TypedInputFields";

const InputComponents = {
  number: NumberField,
  text: TextField,
};

export type InputConfig = {
  type: keyof typeof InputComponents;
  name: string;
  title?: string;
  defaultValue?: number;
};

type InputFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputConfigs: InputConfig[];
  buttonText?: string;
};

export default function InputForm({
  inputConfigs,
  onSubmit,
  buttonText = "확인",
}: InputFormProps) {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
      `}
      onSubmit={onSubmit}
    >
      {inputConfigs.map(({ name, type, title, defaultValue }) => {
        const InputComponent = InputComponents[type];
        return (
          <InputComponent name={name} key={name} initialValue={defaultValue}>
            {title ?? name}
          </InputComponent>
        );
      })}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}
