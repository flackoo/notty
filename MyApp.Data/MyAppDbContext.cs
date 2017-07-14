namespace MyApp.Data
{
	using Microsoft.AspNet.Identity.EntityFramework;
	using Migrations;
	using Models;
	using System.Data.Entity;

	public class MyAppDbContext : IdentityDbContext<User>
	{
		public MyAppDbContext() : base("WorkPC", throwIfV1Schema: false)
		{
			Database.SetInitializer(new MigrateDatabaseToLatestVersion<MyAppDbContext, Configuration>());
		}

		public IDbSet<Note> Notes { get; set; }

		public static MyAppDbContext Create()
		{
			return new MyAppDbContext();
		}
	}
}