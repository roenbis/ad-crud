using Microsoft.EntityFrameworkCore;

namespace a_crud_api.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Crud> Cruds => Set<Crud>();
}