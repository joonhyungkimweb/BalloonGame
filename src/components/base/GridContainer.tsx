/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

type GridContainerProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>> &
  GridSize;

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
        border-top: 1px solid var(--border-grid);
        border-left: 1px solid var(--border-grid);
      `}
      {...props}
    >
      {children}
    </ul>
  );
}
