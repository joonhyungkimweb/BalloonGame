/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { InputHTMLAttributes, PropsWithChildren } from "react";

const inputSizes = {
  medium: css`
    padding: 0.5rem;
    font-size: 1rem;
  `,
};

type InputProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> & {
  inputSize?: keyof typeof inputSizes;
};

export default function Input({ inputSize = "medium", ...props }: InputProps) {
  return (
    <input
      css={css`
        ${inputSizes[inputSize]}
        color: var(--color-text-default);
        background-color: var(--background-sub);
        border: 1px solid var(--color-gray);
        border-radius: 0.25rem;
      `}
      {...props}
    />
  );
}
