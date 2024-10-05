import {
    ColorInput,
    Group,
    NumberInput,
    Stack,
    Switch,
    Textarea,
} from "@mantine/core";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import StravaIcon from "@/components/StravaIcon";
import { GithubButton } from "@/components/GithubButton";
import { Footer } from "@/components/Footer";
import { useLocalStorage } from "@mantine/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const storageKey = "customState";
    const defaultValue = {
        polyline:
            "}xiyHjgWIC{@GUGs@I]KyAM]Kk@GaA[sCc@a@O}@QmBUa@IoA_@y@Oa@Qk@a@g@SU]@GHBDAABCYIOQO]Oe@Ig@i@}@w@SUo@c@q@k@{BmCcAyAqAyCi@sA]oAIa@IY_@cBeAeHWiC_@}BU_CKyAScG?aEIyEF_FAuC?OGQMq@A?AR@@G@EIAMEIGWGaD?}@DkA?eCWyAUm@s@mAM]L_@@SCOk@u@Q{@CWDw@?e@F_AIyBAmBDaECq@HyCC_@FuA?[HqBLmA@[?_BFyAEyBi@{EG{@WiAM}@Ce@DmASOGSIeAA]QiBSs@Ow@Uo@U_@Ue@K]G_A_@sAQaB?UVuBWmADuAHqANi@Rc@@UKqBEaC@cAMw@Aa@@_AI}@O{@BQ?BEECMCk@?cCIo@Ic@M_BC{BBm@Ca@@]V_AFc@Fe@B{@Nq@DiB?oAEa@AkAJgBEi@SmAWm@WeAa@}BSu@g@uA_@y@Qu@w@eAM]CMPABKCo@Ms@[oAc@kAQUK]_@eCF}@Iy@[gA[m@Yy@GGB`@FO?WYuAWo@e@iBiAqCiAaDc@mBIs@_@iAUeAo@uBO}@OcAG_AKk@cAgDSgBAq@BIDPAFg@sDWoAWkBQkBI_Bc@gEg@uCK_BYuAKoAOeAC]?i@E\D?]qBMwAGiCKy@a@uCY}A]}BSiB]gBKcBYoBOyBOs@UcB]uA_@gEa@{BQ}A[yBIcAM{@c@uEIyAM{CW{DOa@o@w@Kq@Iw@YmBQi@GYk@wB[aBMe@a@eA[mA_@u@QUa@{@a@cAGW",
        size: 256 * 2,
        stroke: "#2490ba",
        "stroke-width": 1.5,
        withBorder: true,
        color: "#fff",
    }
    const [ state, setState ] = useLocalStorage({ key: storageKey, defaultValue });
    return (
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
            <Footer/>
        </main>
    );
}
