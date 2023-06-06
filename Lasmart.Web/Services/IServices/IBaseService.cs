using Lasmart.Web.Models;

namespace Lasmart.Web.Services.IServices;

public interface IBaseService
{
    Task<ResponseDto> SendAsync(ApiRequest apiRequest);
}