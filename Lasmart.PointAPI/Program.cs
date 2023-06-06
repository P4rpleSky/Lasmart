using AutoMapper;
using Lasmart.PointAPI;
using Lasmart.PointAPI.DbContexts;
using Lasmart.PointAPI.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase(databaseName: "UserDb"),
    ServiceLifetime.Singleton);

var mapper = MappingConfig.RegisterMaps().CreateMapper();
builder.Services.AddSingleton(mapper);
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddSingleton<IPointRepository, PointRepository>();

builder.Services.AddCors();

var apiPolicyName = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: apiPolicyName,
        policyBuilder =>
        {
            policyBuilder.WithOrigins("https://localhost:7079").AllowAnyHeader().AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(apiPolicyName);

app.UseAuthorization();

app.MapControllers();

app.Run();