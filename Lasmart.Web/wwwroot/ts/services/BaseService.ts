import {IBaseService} from "./IServices/IBaseService";
import {ApiRequest} from "../Models/ApiRequest";
import {ResponseDto} from "../Models/ResponseDto";

export class BaseService implements IBaseService {

    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    sendAsync(apiRequest: ApiRequest): Promise<ResponseDto> {
        return fetch(this.baseUrl + apiRequest.urn, {
            body: JSON.stringify(apiRequest.data),
            method: apiRequest.apiMethod.toString(),
            headers: { "Accept": "application/json", "Content-Type": "application/json" }
        })
            .then(x => x.json())
            .then(x => Object.assign(Array<ResponseDto>, x));
    }

}