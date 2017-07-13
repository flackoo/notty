namespace MyApp.Server.Controllers
{
  using Models.BindingModels;
  using MyApp.Data.UnitOfWork;
  using MyApp.Models;
  using System;
  using System.Globalization;
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
      try
      {
        string dateString = model.Reminder.Remove(model.Reminder.Length - 3, 3) + ":00 GMT";
        Note note = new Note
        {
          Author = this.UserProfile,
          Content = model.Content,
          PostedOn = DateTime.Now,
          Priority = model.Priority > 0 && model.Priority < 6 ? (NotePriorityType)model.Priority : NotePriorityType.Normal,
          Reminder = model.Reminder != null ? DateTime.Parse(dateString) : (DateTime?)null
        };
        this.UserProfile.Notes.Add(note);
        this.Data.SaveChanges();

        return Json(new
        {
          success = true,
          message = "Successfully added a note"
        });
      }
      catch (Exception ex)
      {
        return Json(new
        {
          success = false,
          message = "An error occured.Please try adding note again."
        });
      }
		}

		public ActionResult Index()
		{
			return View();
		}
	}
}