/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

interface GridContainerProps
  extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {
  rows: number;
  columns: number;
}

export default function GridContainer({
  children,
  rows,
  columns,
  ...props
}: GridContainerProps) {
  return (
    <ul
      css={css`
        display: grid;
        grid-template: repeat(${rows}, 1fr) / repeat(${columns}, 1fr);
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid black;
        border-left: 1px solid black;
      `}
      {...props}
    >
      {children}
    </ul>
  );
}
