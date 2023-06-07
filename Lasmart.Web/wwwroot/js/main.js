import { PointService } from "./services/PointService.js";
import { get_konva_circle } from "./get_konva_circle.js";

const pointService = new PointService("https://localhost:7259/");

const stage = new Konva.Stage({
    container: 'base-div',
    width: 1920,
    height: 1080
});

pointService.getPointsAsync()
    .then(response => {
        if (response.isSuccess) {
            const pointsList = response.result;
            
            const layer = new Konva.Layer();
            
            pointsList.forEach(function (pointWithComments) {
                const circle = get_konva_circle(pointWithComments);
                circle.on("dblclick", function (e) {
                    pointService.deletePointByIdAsync(e.target.attrs.id)
                        .then(x => circle.destroy())
                        .catch(x => alert(`Failed to delete point. Error: "${x}")`))
                })
                layer.add(circle);
                stage.add(layer);
            });
    }
});