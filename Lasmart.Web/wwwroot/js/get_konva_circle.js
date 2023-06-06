export function get_konva_circle(pointWithComments) {

    return new Konva.Circle({
        id: pointWithComments.id,
        x: pointWithComments.x,
        y: pointWithComments.y,
        radius: pointWithComments.radius,
        fill: pointWithComments.color,
        /*stroke: 'black',
        strokeWidth: 1*/
    });
}