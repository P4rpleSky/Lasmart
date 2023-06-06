import {ResponseDto} from "../../Models/ResponseDto";

export interface IPointService {
    getPointAsync() : Promise<ResponseDto>
    deletePointByIdAsync(pointId: number) : Promise<ResponseDto>
}