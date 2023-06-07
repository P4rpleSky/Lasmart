using AutoMapper;
using Lasmart.PointAPI.DbContexts;
using Lasmart.PointAPI.Models;
using Lasmart.PointAPI.Models.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Lasmart.PointAPI.Repository;

public class PointRepository : IPointRepository
{
    private readonly ApplicationDbContext _db;
    private readonly IMapper _mapper;

    public PointRepository(ApplicationDbContext dbContext, IMapper mapper)
    {
        _db = dbContext;
        #region DataSeed

        var points = new List<Point>
        {
            new()
            {
                Id = 1,
                X = 2,
                Y = 2,
                Radius = 2,
                Color = "Gray"
            },
            new()
            {
                Id = 2,
                X = 60,
                Y = 80,
                Radius = 5,
                Color = "Red"
            },
            new()
            {
                Id = 3,
                X = 200,
                Y = 200,
                Radius = 50,
                Color = "Green"
            },
            new()
            {
                Id = 4,
                X = 600,
                Y = -50,
                Radius = 100,
                Color = "Violet"
            },
            new()
            {
                Id = 5,
                X = -50,
                Y = -50,
                Radius = 100,
                Color = "Black"
            },
            new()
            {
                Id = 6,
                X = 900.5,
                Y = 900.5,
                Radius = 40.78,
                Color = "Yellow"
            },
            new()
            {
                Id = 7,
                X = 500,
                Y = 400,
                Radius = 3,
                Color = "Black"
            }
        };
        _db.Points.AddRange(points);
        _db.SaveChanges();
        
        var comments = new List<Comment>
        {
            new()
            {
                Id = 1,
                Text = "Bla bla blaaa",
                BackgroundColor = "White",
                PointId = 1
            },
            new()
            {
                Id = 2,
                Text = "Bla bla 1",
                BackgroundColor = "Yellow",
                PointId = 1
            },
            new()
            {
                Id = 3,
                Text = "Bla bla 2",
                BackgroundColor = "White",
                PointId = 1
            },
            new()
            {
                Id = 4,
                Text = "Bla bla 3",
                BackgroundColor = "Red",
                PointId = 1
            },
            new()
            {
                Id = 5,
                Text = "Comment for point 2",
                BackgroundColor = "Green",
                PointId = 2
            },
            new()
            {
                Id = 6,
                Text = "Bla bla 6 Comment for point 3",
                BackgroundColor = "Pink",
                PointId = 3
            },
            new()
            {
                Id = 7,
                Text = "Comment for point 4",
                BackgroundColor = "Violet",
                PointId = 4
            },
            new()
            {
                Id = 8,
                Text = "Comment for point 6",
                BackgroundColor = "Green",
                PointId = 6
            },
            new()
            {
                Id = 9,
                Text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                BackgroundColor = "blue",
                PointId = 6
            },
            new()
            {
                Id = 10,
                Text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                BackgroundColor = "Blue",
                PointId = 7
            },
            new()
            {
                Id = 11,
                Text = "tevirp",
                BackgroundColor = "Red",
                PointId = 7
            }
        };
        _db.Comments.AddRange(comments);
        _db.SaveChanges();
        
        #endregion
        _mapper = mapper;
    }
    
    public async Task<IEnumerable<PointDto>> GetPointsAsync()
    {
        var points = await _db.Points.OrderBy(x => x.Id).ToListAsync();
        return _mapper.Map<List<PointDto>>(points);
    }

    public async Task<bool> DeletePointAsync(int pointId)
    {
        foreach (var comment in _db.Comments.Where(x => x.PointId == pointId))
        {
            _db.Comments.Remove(comment);
        }
        await _db.SaveChangesAsync();

        var point = await _db.Points.FirstOrDefaultAsync(x => x.Id == pointId);
        if (point is null)
        {
            return false;
        }
        _db.Points.Remove(point);
        await _db.SaveChangesAsync();

        return true;
    }
}