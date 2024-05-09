/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const messageSizes = {
  medium: css`
    font-size: 1rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

type MessageProps = {
  message: string;
  size?: keyof typeof messageSizes;
};

export default function Message({ message, size = "medium" }: MessageProps) {
  return (
    <p
      css={css`
        ${messageSizes[size]}
        text-align: center;
      `}
    >
      {message}
    </p>
  );
}
