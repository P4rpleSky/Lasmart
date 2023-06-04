using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Lasmart.PointAPI.Models;

[PrimaryKey(nameof(Id))]
public class Point
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [Required]
    public double X { get; set; }
    
    [Required]
    public double Y { get; set; }
    
    [Required]
    public double Radius { get; set; }

    [Required]
    public string Color { get; set; } = "";
    
    public virtual List<Comment> Comments { get; set; } = new();
}