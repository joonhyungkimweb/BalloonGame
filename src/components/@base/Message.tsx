/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const messageSizes = {
  small: css`
    font-size: 0.8rem;
  `,
  medium: css`
    font-size: 1rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

const messageTypes = {
  message: css`
    color: var(--color-text-default);
  `,
  error: css`
    color: var(--color-error);
  `,
};

type MessageProps = {
  children: string;
  type?: keyof typeof messageTypes;
  size?: keyof typeof messageSizes;
};

export default function Message({
  children,
  type = "message",
  size = "medium",
}: MessageProps) {
  return (
    <p
      css={css`
        ${messageSizes[size]}
        ${messageTypes[type]}
        text-align: center;
      `}
    >
      {children}
    </p>
  );
}
