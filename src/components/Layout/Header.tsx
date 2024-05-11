/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ThemeToggleButton from "../ThemeButton/ThemeToggleButton";
import GameSaveButton from "../GameSave/GameSaveButton";
import GameSaveModal from "../GameSave/GameSaveModal";

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-basis: 3rem;
        padding-bottom: 1rem;
        gap: 1rem;
      `}
    >
      <GameSaveModal />
      <GameSaveButton />
      <ThemeToggleButton />
    </header>
  );
}
