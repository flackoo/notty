namespace MyApp.Server.App_Start
{
	using AutoMapper;
	using MyApp.Models;
	using MyApp.Server.Models.ViewModels;

	public static class MapperConfig
	{
		public static void Configure()
		{
			ConfigureMapper();
		}

		private static void ConfigureMapper()
		{
			Mapper.Initialize(cfg =>
			{
				cfg.CreateMap<Note, ConciseNoteViewModel>()
					.ForMember(note => note.Reminder, opt => opt.MapFrom(src => src.Reminder.ToString("dd-MM-yyyy")));
			});
		}
	}
}