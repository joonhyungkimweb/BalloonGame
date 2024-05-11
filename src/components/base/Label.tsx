/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LabelHTMLAttributes, PropsWithChildren } from "react";

const labelSizes = {
  medium: css`
    font-size: 1rem;
  `,
};

type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
  size?: keyof typeof labelSizes;
};

export default function Label({
  children,
  size = "medium",

  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      css={css`
        ${labelSizes[size]}
      `}
    >
      {children}
    </label>
  );
}
