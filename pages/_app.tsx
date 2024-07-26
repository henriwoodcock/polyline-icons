import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
