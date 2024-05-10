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

function ModalContent({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        background-color: white;
        padding: 2rem 4rem;
        border-radius: 0.5rem;
      `}
    >
      {children}
    </div>
  );
}

export default function Modal({ children }: PropsWithChildren) {
  return (
    <ModalBackground>
      <ModalContent>{children}</ModalContent>
    </ModalBackground>
  );
}
