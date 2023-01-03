// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import NextNProgress from "nextjs-progressbar";
import { createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import daisyuiColors from "daisyui/src/colors/themes";
import { MantineProvider } from "@mantine/core";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const connectingFlightContext = createContext({});
const MyApp: AppType<SessionProviderProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [connectingFlightData, setconnectingFlightData] = useState();

  return (
    <>
      <connectingFlightContext.Provider
        value={{ connectingFlightData, setconnectingFlightData }}
      >
        <SessionProvider session={session}>
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
        </SessionProvider>
      </connectingFlightContext.Provider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
