// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import NextNProgress from "nextjs-progressbar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import daisyuiColors from "daisyui/src/colors/themes";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        options={{ showSpinner: false }}
        color={daisyuiColors["[data-theme=light]"].primary}
      />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
