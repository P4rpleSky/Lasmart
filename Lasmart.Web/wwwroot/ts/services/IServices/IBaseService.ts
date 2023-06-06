import {ApiRequest} from "../../Models/ApiRequest";
import {ResponseDto} from "../../Models/ResponseDto";

export interface IBaseService {
    sendAsync(apiRequest: ApiRequest): Promise<ResponseDto>
}