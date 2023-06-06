import {IPointService} from "IServices/IPointService";
import {BaseService} from "./BaseService";
import {ResponseDto} from "../models/ResponseDto";
import {ApiMethod} from "../models/ApiMethod";
import {ApiRequest} from "../models/ApiRequest";

export class PointService extends BaseService implements IPointService {
    
    constructor(baseUrl: string)  {
        super(baseUrl)
    }
    deletePointByIdAsync(pointId: number): Promise<ResponseDto> {
        return this.sendAsync(new ApiRequest(
            ApiMethod.DELETE,
            this.baseUrl + `api/points/pointId=${pointId}`
        ));
    }

    getPointAsync(): Promise<ResponseDto> {
        return this.sendAsync(new ApiRequest(
            ApiMethod.GET,
            this.baseUrl + "api/points"
        ));
    }
    
}