import { IsSsrMobileContext } from "@/context";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <Component {...pageProps} />
    </IsSsrMobileContext.Provider>
  );
}
