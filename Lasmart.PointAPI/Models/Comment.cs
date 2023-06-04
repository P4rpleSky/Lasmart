using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Lasmart.PointAPI.Models;

[PrimaryKey(nameof(Id))]
public class Comment
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string Text { get; set; } = string.Empty;
    
    [Required]
    public string BackgroundColor { get; set; } = "";
    
    [Required]
    public int PointId { get; set; }
    
    [ForeignKey(nameof(PointId))]
    public Point Point { get; set; } = null!;
}