import { BaseService } from "./BaseService.js";
import { ApiMethod } from "../models/ApiMethod.js";
import { ApiRequest } from "../models/ApiRequest.js";
export class PointService extends BaseService {
    constructor(baseUrl) {
        super(baseUrl);
    }
    deletePointByIdAsync(pointId) {
        return this.sendAsync(new ApiRequest(ApiMethod.DELETE, `api/points/pointId=${pointId}`));
    }
    getPointsAsync() {
        return this.sendAsync(new ApiRequest(ApiMethod.GET, "api/points"));
    }
}
//# sourceMappingURL=PointService.js.map