/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

function ModalBackground({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
      `}
    >
      {children}
    </div>
  );
}

const contentSizes = {
  small: css`
    width: 16rem;
  `,
  medium: css`
    width: 24rem;
  `,
  large: css`
    width: 32rem;
  `,
};

type ModalContentProps = PropsWithChildren<{
  size?: keyof typeof contentSizes;
}>;

function ModalContent({ size = "medium", children }: ModalContentProps) {
  return (
    <div
      css={css`
        ${contentSizes[size]}
        background-color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        text-align: center;
      `}
    >
      {children}
    </div>
  );
}

export default function Modal({ size, children }: ModalContentProps) {
  return (
    <ModalBackground>
      <ModalContent size={size}>{children}</ModalContent>
    </ModalBackground>
  );
}
