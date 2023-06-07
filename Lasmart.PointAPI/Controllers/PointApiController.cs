using Lasmart.PointAPI.Models.Dtos;
using Lasmart.PointAPI.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Lasmart.PointAPI.Controllers;

[ApiController]
[Route("api/points")]
public class PointApiController : Controller
{
    private readonly IPointRepository _pointRepository;
    private readonly ResponseDto _response;

    public PointApiController(IPointRepository pointRepository)
    {
        _pointRepository = pointRepository;
        _response = new ResponseDto();
    }

    [HttpGet]
    public async Task<ResponseDto> Get()
    {
        try
        {
            var points = await _pointRepository.GetPointsAsync();
            _response.Result = points;
        }
        catch (Exception ex)
        {
            _response.IsSuccess = false;
            _response.ErrorMessages.Add(ex.ToString());
        }
        return _response;
    }
    
    [HttpDelete("pointId={pointId:int}")]
    public async Task<ResponseDto> Delete(int pointId)
    {
        try
        {
            var isSuccess = await _pointRepository.DeletePointAsync(pointId);
            _response.Result = isSuccess;
        }
        catch (Exception ex)
        {
            _response.IsSuccess = false;
            _response.ErrorMessages.Add(ex.ToString());
        }
        return _response;
    }
}