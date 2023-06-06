using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Lasmart.Web.Models;
using Lasmart.Web.Services.IServices;
using Newtonsoft.Json;

namespace Lasmart.Web.Controllers;

public class HomeController : Controller
{
    private readonly IPointService _pointService;

    public HomeController(IPointService pointService)
    {
        _pointService = pointService;
    }

    public IActionResult Index()
    {
        return View();
    }
    
    /*public async Task<IActionResult> Index()
    {
        List<PointDto> pointsList = new();
        var response = await _pointService.GetPointsAsync();
        if (response.IsSuccess)
        {
            pointsList = JsonConvert.DeserializeObject<List<PointDto>>(response.Result.ToString());
        }
        return View(pointsList);
    }*/
}