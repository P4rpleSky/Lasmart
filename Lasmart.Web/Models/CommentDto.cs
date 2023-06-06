using System.ComponentModel.DataAnnotations;

namespace Lasmart.Web.Models;

public class CommentDto
{
    [Required]
    public int Id { get; set; }

    public string Text { get; set; } = string.Empty;
    
    [Required]
    public string BackgroundColor { get; set; } = "";
    
    [Required]
    public int PointId { get; set; }
}