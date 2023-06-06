using System.Text;
using Lasmart.Web.Models;
using Lasmart.Web.Services.IServices;
using Newtonsoft.Json;

namespace Lasmart.Web.Services;

public class BaseService : IBaseService
{
    private readonly IHttpClientFactory _clientFactory;

    public BaseService(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }

    public async Task<ResponseDto> SendAsync(ApiRequest apiRequest)
    {
        try
        {
            var client = _clientFactory.CreateClient("LasmartPointAPI");
            client.DefaultRequestHeaders.Clear();

            var message = new HttpRequestMessage();
            message.Headers.Add("Accept", "application/json");
            message.RequestUri = new Uri(apiRequest.Url);
            if (apiRequest.Data != null)
            {
                message.Content = new StringContent(
                    JsonConvert.SerializeObject(apiRequest.Data),
                    Encoding.UTF8,
                    "application/json");
            }

            switch (apiRequest.ApiMethod)
            {
                case SD.ApiMethod.DELETE:
                    message.Method = HttpMethod.Delete;
                    break;
                default:
                    message.Method = HttpMethod.Get;
                    break;
            }

            var apiResponse = await client.SendAsync(message);

            var apiContent = await apiResponse.Content.ReadAsStringAsync();
            var apiResponseDto = JsonConvert.DeserializeObject<ResponseDto>(apiContent);
            if (apiResponseDto is null)
                throw new NullReferenceException("API response is null!");
            return apiResponseDto;
        }
        catch (Exception ex)
        {
            var apiResponseDto = new ResponseDto
            {
                Message = "Service Error!",
                ErrorMessages = new List<string> { ex.Message },
                IsSuccess = false
            };
            return apiResponseDto;
        }
    }
}