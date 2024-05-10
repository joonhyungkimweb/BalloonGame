/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

const labelSizes = {
  medium: css`
    font-size: 1rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

type LabelProps = PropsWithChildren<HTMLAttributes<HTMLLabelElement>> & {
  size?: keyof typeof labelSizes;
};

export default function Label({ children, size = "medium" }: LabelProps) {
  return (
    <label
      css={css`
        ${labelSizes[size]}
        text-align: center;
      `}
    >
      {children}
    </label>
  );
}
