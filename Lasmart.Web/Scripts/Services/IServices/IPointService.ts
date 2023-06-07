import {ResponseDto} from "../../Models/ResponseDto";

export interface IPointService {
    getPointsAsync() : Promise<ResponseDto>
    deletePointByIdAsync(pointId: number) : Promise<ResponseDto>
}