namespace MyApp.Server.Controllers
{
	using Data.UnitOfWork;
	using MyApp.Models;
	using System;
	using System.Linq;
	using System.Web.Mvc;
	using System.Web.Routing;

	public abstract class BaseController : Controller
	{
		private IMyAppData data;
		private User userProfile;

		protected BaseController(IMyAppData data)
		{
			this.Data = data;
		}

		protected BaseController(IMyAppData data, User userProfile) : this(data)
		{
			this.UserProfile = userProfile;
		}

		protected IMyAppData Data { get; private set; }

		protected User UserProfile { get; private set; }

		protected override IAsyncResult BeginExecute(RequestContext requestContext, AsyncCallback callback, object state)
		{
			if (requestContext.HttpContext.User.Identity.IsAuthenticated)
			{
				var username = requestContext.HttpContext.User.Identity.Name;
				var user = this.Data.Users.All().FirstOrDefault(u => u.UserName == username);
				this.UserProfile = user;
			}

			return base.BeginExecute(requestContext, callback, state);
		}
	}
}