/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { InputHTMLAttributes, PropsWithChildren } from "react";
import { colors } from "../../styles/colors";

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
        border : 1px solid ${colors.gray};
        border-radius: 0.25rem;
      `}
      {...props}
    />
  );
}
