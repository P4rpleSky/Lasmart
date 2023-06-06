import {ResponseDto} from "../../models/ResponseDto";

export interface IPointService {
    getPointsAsync() : Promise<ResponseDto>
    deletePointByIdAsync(pointId: number) : Promise<ResponseDto>
}