namespace MyApp.Server.Controllers
{
	using AutoMapper;
	using Data.UnitOfWork;
	using Models.ViewModels;
	using MyApp.Models;
	using System.Collections.Generic;
	using System.Linq;
	using System.Web.Mvc;

	public class HomeController : BaseController
	{
		public HomeController(IMyAppData data) : base(data) { }

		public ActionResult Index()
		{
			if(this.User.Identity.IsAuthenticated)
			{
				IEnumerable<Note> soonNotes = this.UserProfile.Notes.OrderBy(n => n.Reminder).Take(5);
				IEnumerable<ConciseNoteViewModel> soonNotesModel = Mapper.Map<IEnumerable<ConciseNoteViewModel>>(soonNotes);
				return View(new HomeBagViewModel()
				{
					SoonNotes = soonNotesModel
				});
			}

			return View();
		}

		public ActionResult About()
		{
			ViewBag.Message = "Your application description page.";

			return View();
		}

		public ActionResult Contact()
		{
			ViewBag.Message = "Your contact page.";

			return View();
		}
	}
}