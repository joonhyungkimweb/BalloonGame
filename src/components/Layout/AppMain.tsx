/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "../../styles/variables";
import useThemeAtom from "../../atoms/useThemeAtom";
import { PropsWithChildren } from "react";

export default function AppMain({ children }: PropsWithChildren) {
  const { theme } = useThemeAtom();

  return (
    <main
      css={css`
        ${variables[theme]}
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: var(--background-main);
        color: var(--color-text-default);
        overflow: hidden;
      `}
    >
      {children}
    </main>
  );
}
