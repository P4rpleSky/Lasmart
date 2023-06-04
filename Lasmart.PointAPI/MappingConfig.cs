using System.Drawing;
using AutoMapper;
using Lasmart.PointAPI.Models;
using Lasmart.PointAPI.Models.Dtos;
using Point = Lasmart.PointAPI.Models.Point;

namespace Lasmart.PointAPI;

public class MappingConfig
{
    public static MapperConfiguration RegisterMaps()
    {
        var mappingConfig = new MapperConfiguration(config =>
        {
            config.CreateMap<Point, PointDto>().ReverseMap();
            config.CreateMap<CommentDto, Comment>().ReverseMap();
        });
        return mappingConfig;
    }
}