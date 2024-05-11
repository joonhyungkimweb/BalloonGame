/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./Button";
import { NumberField, TextField } from "./TypedInputFields";
import Message from "./Message";
import { useState } from "react";
import { ErrorWithPresentational } from "../../shared/constants/errors";

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
  errorText?: string;
  buttonText?: string;
};

export default function InputForm({
  inputConfigs,
  onSubmit,
  buttonText = "확인",
}: InputFormProps) {
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setErrorMessage(undefined);
      onSubmit(e);
    } catch (err) {
      if (err instanceof ErrorWithPresentational)
        return setErrorMessage(err.presentational);

      setErrorMessage("오류가 발생했습니다.");
    }
  };

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
      `}
      onSubmit={handleSubmit}
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
      {errorMessage && (
        <Message size="small" type="error">
          {errorMessage}
        </Message>
      )}
    </form>
  );
}
