import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContextLogic";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://r5gagfdyo4vf.usemoralis.com:2053/server"
      appId="AOfdbPa5Hj7QcjCZenf5ivOj42iCK4L1wCBof3tp"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
