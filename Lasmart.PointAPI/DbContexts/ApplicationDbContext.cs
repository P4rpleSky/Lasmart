using Lasmart.PointAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Lasmart.PointAPI.DbContexts;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public DbSet<Point> Points { get; set; }
    public DbSet<Comment> Comments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        /*base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Point>().HasData(new Point
        {
            Id = 1,
            X = 2,
            Y = 2,
            Radius = 2,
            Color = "Gray"
        });
        modelBuilder.Entity<Point>().HasData(new Point
        {
            Id = 2,
            X = 60,
            Y = 80,
            Radius = 5,
            Color = "Red"
        });
        modelBuilder.Entity<Point>().HasData(new Point
        {
            Id = 3,
            X = 200,
            Y = 200,
            Radius = 50,
            Color = "Green"
        });
        modelBuilder.Entity<Point>().HasData(new Point
        {
            Id = 4,
            X = 600,
            Y = -50,
            Radius = 100,
            Color = "Violet"
        });
        modelBuilder.Entity<Point>().HasData(new Point
        {
            Id = 5,
            X = -50,
            Y = -50,
            Radius = 100,
            Color = "Black"
        });
        
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 1,
            Text = "Bla bla blaaa",
            BackgroundColor = "White",
            PointId = 1
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 2,
            Text = "Bla bla 1",
            BackgroundColor = "White",
            PointId = 1
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 3,
            Text = "Bla bla 2",
            BackgroundColor = "White",
            PointId = 1
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 4,
            Text = "Bla bla 3",
            BackgroundColor = "White",
            PointId = 1
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 5,
            Text = "Comment for point 2",
            BackgroundColor = "White",
            PointId = 2
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 6,
            Text = "Bla bla 6 Comment for point 3",
            BackgroundColor = "White",
            PointId = 3
        });
        modelBuilder.Entity<Comment>().HasData(new Comment
        {
            Id = 7,
            Text = "Comment for point 4",
            BackgroundColor = "White",
            PointId = 4
        });*/
    }
}