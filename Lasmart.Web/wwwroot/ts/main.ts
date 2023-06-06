import Konva from "../lib/konva/konva.min.js"
import {PointService} from "./services/PointService";
import {PointDto} from "./models/PointDto";
import {get_konva_circle} from "./get_konva_circle";

const pointService = new PointService("https://localhost:7259/")

pointService.getPointAsync()
    .then(response => {
        if (response.isSuccess){
            const pointsList = Array.of(response.result.toString()).map(x => Object.assign(new PointDto, x))
            
            let stage = new Konva.Stage({
                container: 'base-div',
            });
            let layer = new Konva.Layer();

            pointsList.forEach(function (pointWithComments) {
                
                const circle = get_konva_circle(pointWithComments);
                layer.add(circle);
            });

            stage.add(layer);
        }
    })



