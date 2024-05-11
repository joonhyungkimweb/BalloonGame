/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const buttonVariants = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-text-on-primary);
  `,
  transparent: css`
    background-color: transparent;
    color: var(--color-primary);
  `,
};

const buttonSizes = {
  medium: css`
    padding: 0.5rem 1rem;
    width: 5rem;
    height: 2rem;
  `,
  large: css`
    padding: 1rem 2rem;
    width: 10rem;
    height: 4rem;
    font-size: 1.5rem;
  `,
  stretch: css`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: inline-block;
  `,
};

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

export default function Button({
  children,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      css={css`
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        border : none;
        border-radius: 0.25rem;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        &[hidden] {
          visibility: hidden;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}
