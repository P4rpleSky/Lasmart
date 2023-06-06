import {IBaseService} from "./IServices/IBaseService.js";
import {ApiRequest} from "../models/ApiRequest.js";
import {ResponseDto} from "../models/ResponseDto.js";
import {ApiMethod} from "../models/ApiMethod.js";

export class BaseService implements IBaseService {

    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    sendAsync(apiRequest: ApiRequest): Promise<ResponseDto> {
        const apiMethod=  apiRequest.apiMethod.toString();
        return fetch(this.baseUrl + apiRequest.urn, {
            body: apiRequest.apiMethod === ApiMethod.GET ? undefined : JSON.stringify(apiRequest.data),
            method: apiMethod,
            headers: { "Accept": "application/json", "Content-Type": "application/json" }
        })
            .then(x => x.json())
            .catch(x => alert(x))
            .then(x => Object.assign(ResponseDto, x));
    }

}