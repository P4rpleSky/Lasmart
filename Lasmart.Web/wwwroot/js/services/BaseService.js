import { ResponseDto } from "../Models/ResponseDto.js";
import { ApiMethod } from "../Models/ApiMethod.js";
export class BaseService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    sendAsync(apiRequest) {
        const apiMethod = apiRequest.apiMethod.toString();
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
//# sourceMappingURL=BaseService.js.map