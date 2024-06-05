"use client";

import { NextUIProvider } from "@nextui-org/system";

function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Providers;
