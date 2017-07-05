namespace MyApp.Data.Migrations
{
	using Microsoft.AspNet.Identity;
	using Microsoft.AspNet.Identity.EntityFramework;
	using System.Data.Entity.Migrations;
	using System.Linq;

	public sealed class Configuration : DbMigrationsConfiguration<MyAppDbContext>
	{
		public Configuration()
		{
			this.AutomaticMigrationsEnabled = true;
			this.AutomaticMigrationDataLossAllowed = true;
		}

		protected override void Seed(MyAppDbContext context)
		{
			if (!context.Roles.Any(r => r.Name == "Admin"))
			{
				var store = new RoleStore<IdentityRole>(context);
				var manager = new RoleManager<IdentityRole>(store);
				var adminRole = new IdentityRole { Name = "UserAdministrator" };

				manager.Create(adminRole);
			}
		}
	}
}