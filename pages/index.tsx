import Head from "next/head";
import {
    ColorInput,
    createTheme,
    Group,
    MantineProvider,
    NumberInput,
    Stack,
    Switch,
    Textarea,
} from "@mantine/core";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import StravaIcon from "@/components/StravaIcon";
import { GithubButton } from "@/components/GithubButton";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [state, setState] = useState({
        polyline: "miuyHzyPQ|@OdAe@lBKl@Gl@I|BMb@q@jBYvAi@zDEn@A~@CR",
        size: 256 * 2,
        stroke: "#2490ba",
        "stroke-width": 1.5,
        withBorder: true,
        color: "#fff",
    });
    const theme = createTheme({
        /** Put your mantine theme override here */
    });
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
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    <h1>🗺️ Polyline Icon Maker 🗺️</h1>
                </div>
                <div className={styles.descriptionButton}>
                    <GithubButton>View on GitHub</GithubButton>
                </div>
                <div>
                    <StravaIcon {...state} />
                </div>
                <Stack pt="md" className={styles.description} align="stretch">
                    <h2>Customise</h2>
                    <Textarea
                        label="Polyline"
                        placeholder="Enter polyline"
                        autosize
                        minRows={2}
                        maxRows={4}
                        value={state.polyline}
                        onChange={(v) =>
                            setState({
                                ...state,
                                polyline: v.currentTarget.value,
                            })
                        }
                    />
                    <Switch
                        defaultChecked
                        checked={state.withBorder}
                        onChange={(event) =>
                            setState({
                                ...state,
                                withBorder: event.currentTarget.checked,
                            })
                        }
                        color="gray"
                        label="With border"
                    />
                    <Group justify="space-between">
                        <ColorInput
                            label="Stroke Colour"
                            value={state.stroke}
                            onChange={(v) =>
                                setState({
                                    ...state,
                                    stroke: v,
                                })
                            }
                        />
                        <ColorInput
                            label="Background Colour"
                            value={state.color}
                            onChange={(v) =>
                                setState({
                                    ...state,
                                    color: v,
                                })
                            }
                        />
                        <NumberInput
                            label="Stroke Width"
                            value={state["stroke-width"]}
                            min={0}
                            clampBehavior="strict"
                            allowNegative={false}
                            onChange={(v) =>
                                setState({
                                    ...state,
                                    "stroke-width": +v,
                                })
                            }
                        />
                    </Group>
                </Stack>
            </main>
        </MantineProvider>
    );
}
