import { GeoJSON2SVG } from "geojson2svg";

import { toGeoJSON } from "@mapbox/polyline";
import { Center, Paper } from "@mantine/core";

const getHeightWidth = (p: string) => {
    const coords = p
        .slice(1)
        .split(" ")
        .map((d) => {
            const split = d.split(",");
            return [+split[0], +split[1]];
        });
    return [
        Math.max(...coords.map((d) => d[0])),
        Math.max(...coords.map((d) => d[1])),
    ];
};

export interface StravaIconProps {
    polyline: string;
    size: number;
    "stroke-width": number;
    stroke: string;
    withBorder: boolean;
    color: string;
}

const StravaIcon = (props: StravaIconProps) => {
    const {
        polyline: encodedPolyline,
        size,
        stroke,
        withBorder,
        color,
    } = props;
    const geojson = toGeoJSON(encodedPolyline, 1);
    const converter = new GeoJSON2SVG({
        viewportSize: { width: size, height: size },
        output: "path",
    });
    const svgStrings = converter.convert(geojson);
    const strokeWidth = props["stroke-width"];
    const [width, height] = getHeightWidth(svgStrings[0]);

    return (
        <Paper
            withBorder={withBorder}
            background-color={color}
            p="md"
            radius="md"
            w={size * 1.15}
            h={size * 1.15}
            display="flex"
            flex="auto"
            justify-content="space-around"
        >
            <Center>
                <svg
                    fill="none"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    width={width}
                    x={0}
                    y={0}
                >
                    {svgStrings.map((d) => (
                        <path d={d}></path>
                    ))}
                </svg>
            </Center>
        </Paper>
    );
};

export default StravaIcon;
