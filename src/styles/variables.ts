import { css } from "@emotion/react";

export const variables = {
  light: css`
    --color-text-default: #000000;
    --color-primary: #4b0082;
    --color-text-on-primary: #ffffff;
    --color-gray: #d0d0d0;
    --color-error: #ff3333;
    --background-main: #ffffff;
    --background-sub: #ffffff;
    --border-grid: #000000;
  `,
  dark: css`
    --color-text-default: #d0d0d0;
    --color-primary: #9f55d7;
    --color-text-on-primary: #e0e0e0;
    --color-gray: #d0d0d0;
    --color-error: #ff3333;
    --background-main: #1f1f1f;
    --background-sub: #2f2f2f;
    --border-grid: #808080;
  `,
};
