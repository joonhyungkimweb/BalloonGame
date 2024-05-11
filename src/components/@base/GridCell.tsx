/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

interface GridCellProps
  extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  coordinates: Coordinates;
}

export default function GridCell({
  children,
  coordinates: { row, column },
  ...props
}: GridCellProps) {
  return (
    <li
      css={css`
        grid-area: ${row} / ${column};
        border-right: 1px solid var(--border-grid);
        border-bottom: 1px solid var(--border-grid);
        overflow: hidden;
      `}
      {...props}
    >
      {children}
    </li>
  );
}
