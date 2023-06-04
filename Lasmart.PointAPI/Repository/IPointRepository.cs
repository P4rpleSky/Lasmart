using Lasmart.PointAPI.Models.Dtos;

namespace Lasmart.PointAPI.Repository;

public interface IPointRepository
{
    Task<IEnumerable<PointDto>> GetPointsAsync();
    Task<bool> DeletePointAsync(int pointId);
}