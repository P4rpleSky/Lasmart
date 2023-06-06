import {ApiMethod} from "./ApiMethod";

export class ApiRequest {
    readonly apiMethod: ApiMethod;
    readonly urn: string;
    readonly data: object;
    
    constructor(apiMethod: ApiMethod, urn: string, data = null) {
        this.apiMethod = apiMethod;
        this.urn = urn;
        this.data = data;
    }
}