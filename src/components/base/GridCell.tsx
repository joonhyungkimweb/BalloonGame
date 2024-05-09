/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

interface GridCellProps
  extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  coordinates: Coordinates;
}

export default function GridCell({
  children,
  coordinates: { x, y },
  ...props
}: GridCellProps) {
  return (
    <li
      css={css`
        grid-area: ${x} / ${y};
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        overflow: hidden;
      `}
      {...props}
    >
      {children}
    </li>
  );
}
