using Lasmart.Web.Models;
using Lasmart.Web.Services.IServices;

namespace Lasmart.Web.Services;

public class PointService : BaseService, IPointService
{
    public PointService(IHttpClientFactory clientFactory) : base(clientFactory)
    { }

    public async Task<ResponseDto> GetPointsAsync()
    {
        return await this.SendAsync(new ApiRequest
        {
            ApiMethod = SD.ApiMethod.GET,
            Url = SD.PointAPIBase + "api/points"
        });
    }

    public async Task<ResponseDto> DeletePointAsync(int pointId)
    {
        return await this.SendAsync(new ApiRequest
        {
            ApiMethod = SD.ApiMethod.GET,
            Url = SD.PointAPIBase + $"api/points/pointId={pointId}"
        });
    }
}