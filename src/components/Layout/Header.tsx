/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ThemeToggleButton from "../ThemeButton/ThemeToggleButton";

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-basis: 3rem;
        padding-bottom: 1rem;
      `}
    >
      <ThemeToggleButton />
    </header>
  );
}
