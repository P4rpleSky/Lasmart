import {ApiRequest} from "../../models/ApiRequest";
import {ResponseDto} from "../../models/ResponseDto";

export interface IBaseService {
    sendAsync(apiRequest: ApiRequest): Promise<ResponseDto>
}