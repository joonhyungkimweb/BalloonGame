/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { variables } from "../../styles/variables";

type AppMainProps = PropsWithChildren<{
  theme?: keyof typeof variables;
}>;

export default function AppMain({ theme = "light", children }: AppMainProps) {
  return (
    <main
      css={css`
        ${variables[theme]}
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
