/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function BalloonImg() {
  return (
    <figure
      css={css`
        width: 100%;
        height: 100%;
        margin: 0;
      `}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 15 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="15">
          🎈
        </text>
      </svg>
    </figure>
  );
}
