import { PointService } from "./Services/PointService.js";
import { get_konva_circle } from "./get_konva_circle.js";
import {get_comments_layer} from "./get_comments_table.js";

const pointService = new PointService("https://localhost:7259/");
const baseDivId = 'base-div';
const stageWidth = document.getElementById(baseDivId).offsetWidth;
const stageHeight = 1080;

const stage = new Konva.Stage({
    container: baseDivId,
    height: stageHeight,
    width: stageWidth
});

pointService.getPointsAsync()
    .then(response => {
        if (response.isSuccess) {
            
            const pointsList = response.result;
            
            pointsList.forEach(function (pointWithComments) {
                const layer = get_comments_layer(pointWithComments);
                const circle = get_konva_circle(pointWithComments);
                
                circle.on("dblclick", function (e) {
                    pointService.deletePointByIdAsync(e.target.attrs.id)
                        .then(x => layer.destroy())
                        .catch(x => alert(`Failed to delete point. Error: "${x}")`))
                });
                
                layer.add(circle);
                stage.add(layer);
            });
    }
});