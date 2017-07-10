namespace MyApp.Server.Controllers
{
	using Models.BindingModels;
	using MyApp.Data.UnitOfWork;
	using System.Web.Mvc;

	[Authorize]
	public class NotesController : BaseController
	{
		public NotesController(IMyAppData data) : base(data) { }

		[HttpPost]
		public JsonResult Add(AddNoteBindingModel model)
		{
			if (!this.ModelState.IsValid)
			{
				return Json(new
				{
					success = false,
					message = "Invalid data provided.Please try again."
				});
			}

		}

		public ActionResult Index()
		{
			return View();
		}
	}
}