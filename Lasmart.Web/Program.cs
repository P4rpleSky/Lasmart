using Lasmart.Web;
using Lasmart.Web.Services;
using Lasmart.Web.Services.IServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
SD.PointAPIBase = builder.Configuration["BaseUrl"];

builder.Services.AddHttpClient<IPointService, PointService>();
builder.Services.AddScoped<IPointService, PointService>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
