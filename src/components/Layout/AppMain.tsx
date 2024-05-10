/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

export default function AppMain({ children }: PropsWithChildren) {
  return (
    <main
      css={css`
        width: 100%;
        height: 100%;
        padding: 1rem;
      `}
    >
      {children}
    </main>
  );
}
