using Lasmart.Web.Models;

namespace Lasmart.Web.Services.IServices;

public interface IPointService
{
    Task<ResponseDto> GetPointsAsync();
    Task<ResponseDto> DeletePointAsync(int pointId);
}