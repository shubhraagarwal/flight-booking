// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import NextNProgress from "nextjs-progressbar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import daisyuiColors from "daisyui/src/colors/themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        options={{ showSpinner: false }}
        color={daisyuiColors["[data-theme=light]"].primary}
      />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
