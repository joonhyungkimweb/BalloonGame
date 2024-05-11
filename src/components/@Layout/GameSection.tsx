/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BalloonGame from "../BalloonGame/BalloonGame";

export default function GameSection() {
  return (
    <section
      css={css`
        height: calc(100% - 3rem);
      `}
    >
      <BalloonGame />
    </section>
  );
}
