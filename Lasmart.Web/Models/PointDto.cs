using System.ComponentModel.DataAnnotations;

namespace Lasmart.Web.Models;

public class PointDto
{
    [Required]
    public int Id { get; set; }
    
    [Required]
    public double X { get; set; }
    
    [Required]
    public double Y { get; set; }
    
    [Required]
    public double Radius { get; set; }

    [Required]
    public string Color { get; set; } = "";
    
    public virtual List<CommentDto> Comments { get; set; } = new();
}