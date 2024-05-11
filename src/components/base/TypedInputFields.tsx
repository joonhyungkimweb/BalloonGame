/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "./Input";
import Label from "./Label";

type InputFieldProps = {
  type: "number" | "text";
  children: string;
  name: string;
  initialValue?: number;
};

function InputField({ type, name, children, initialValue }: InputFieldProps) {
  const id = `input-${name}`;
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        & > label {
          margin-bottom: 0.5rem;
        }
      `}
    >
      <Label htmlFor={id}>{children}</Label>
      <Input type={type} name={name} id={id} defaultValue={initialValue} />
    </div>
  );
}

const inputComponentCreater =
  (type: InputFieldProps["type"]) => (props: Omit<InputFieldProps, "type">) =>
    <InputField type={type} {...props}></InputField>;

export const TextField = inputComponentCreater("text");
export const NumberField = inputComponentCreater("number");
