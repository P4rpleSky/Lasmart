import {IPointService} from "./IServices/IPointService.js";
import {BaseService} from "./BaseService.js";
import {ResponseDto} from "../models/ResponseDto.js";
import {ApiMethod} from "../models/ApiMethod.js";
import {ApiRequest} from "../models/ApiRequest.js";
export class PointService extends BaseService implements IPointService {
    
    constructor(baseUrl: string)  {
        super(baseUrl)
    }
    deletePointByIdAsync(pointId: number): Promise<ResponseDto> {
        return this.sendAsync(new ApiRequest(
            ApiMethod.DELETE,
            `api/points/pointId=${pointId}`
        ));
    }

    getPointsAsync(): Promise<ResponseDto> {
        return this.sendAsync(new ApiRequest(
            ApiMethod.GET,
            "api/points"
        ));
    }
    
}