using static Lasmart.Web.SD;

namespace Lasmart.Web.Models;

public class ApiRequest
{
    public ApiMethod ApiMethod { get; set; } = ApiMethod.GET;
    public string Url { get; set; } = "";
    public object? Data { get; set; }
}