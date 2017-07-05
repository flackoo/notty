namespace MyApp.Data.UnitOfWork
{
	using MyApp.Data.Repositories;
	using MyApp.Models;

	public interface IMyAppData
	{
		IRepository<User> Users { get; }

		IRepository<Note> Notes { get; }

		void SaveChanges();
	}
}