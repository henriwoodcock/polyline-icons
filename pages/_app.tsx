import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";
import Head from "next/head";

const theme = createTheme({
    /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Head>
                <title>Polyline Icon Maker</title>
                <meta
                    name="description"
                    content="Generate SVGs from encoded polylines"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="shortcut icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>"
                />
            </Head>
            <Component {...pageProps} />
        </MantineProvider>
    );
}
