import polyline from "@mapbox/polyline";

const decodePolyline = (encodedPolyline?: string) => {
    if (!encodedPolyline) {
        return [];
    }
    return polyline.decode(encodedPolyline);
};

const flip = (coord: [number, number]) => coord.slice().reverse();

export const toGeoJSON = (encoded?: string) => {
    return {
        type: "LineString",
        coordinates: decodePolyline(encoded).map((d) => flip(d)),
    };
};
