import "@/styles/globals.css";
import "@/styles/index.scss";
import "@rainbow-me/rainbowkit/styles.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import crypto from "crypto";

const app_id = BigInt(
  parseInt(crypto.randomBytes(20).toString("hex"), 16),
).toString();

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  const { publicClient, chains } = configureChains(
    [mainnet, optimism],
    [publicProvider()],
  );

  const { connectors } = getDefaultWallets({
    appName: "zkForms",
    projectId: "032e7d86545e1e9d28e796da73f4f4c1",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            chains={chains}
            theme={lightTheme({
              accentColor: "#E40536",
              accentColorForeground: "white",
              borderRadius: "medium",
            })}
          >
            <GlobalDataProvider>
              <AnonAadhaarProvider _appId={app_id}>
                <Layout Component={Component} pageProps={pageProps} />
              </AnonAadhaarProvider>
            </GlobalDataProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      ) : null}
    </>
  );
}

const Layout = ({ Component, pageProps }: any) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};
