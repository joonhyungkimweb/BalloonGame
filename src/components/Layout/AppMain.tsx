/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { variables } from "../../styles/variables";

export default function AppMain({ children }: PropsWithChildren) {
  return (
    <main
      css={css`
        ${variables}
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: var(--background-main);
        color: var(--color-text-default);
      `}
    >
      {children}
    </main>
  );
}
