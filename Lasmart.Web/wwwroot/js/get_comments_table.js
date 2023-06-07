export function get_comments_layer(pointWithComments) {

    const layer = new Konva.Layer();
    const margin = 5;
    const height = 20;
    
    const x = pointWithComments.x;
    let y = pointWithComments.y + pointWithComments.radius + margin;
    
    pointWithComments.comments.forEach((comment, index) => {
        
        const text = new Konva.Text({
            x: x,
            y: y,
            text: comment.text,
            fontSize: 20,
            align: 'center',
            /*fill: "green",*/
            padding: 10
        })

        text.offsetX(text.width() / 2);
        
        const rect = new Konva.Rect({
            id: pointWithComments.id + "-" + index,
            x: x,
            y: y,
            width: text.width(),
            height: text.height(),
            fill: comment.backgroundColor,
            stroke: 'black',
            strokeWidth: 1
        });

        rect.offsetX(rect.width() / 2);
        
        layer.add(rect);
        layer.add(text);

        y += margin + text.height();
    })
    return layer;
}