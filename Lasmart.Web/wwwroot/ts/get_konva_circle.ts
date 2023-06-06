import Konva from "../lib/konva/konva.min";
import {PointDto} from "./models/PointDto";

export function get_konva_circle(pointWithComments: PointDto) {

    return new Konva.Circle({
        x: pointWithComments.x,
        y: pointWithComments.y,
        radius: pointWithComments.radius,
        fill: pointWithComments.color,
        /*stroke: 'black',
        strokeWidth: 1*/
    });
}