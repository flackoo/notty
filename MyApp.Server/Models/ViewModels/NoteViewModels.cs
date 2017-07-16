using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyApp.Server.Models.ViewModels
{
	public class ConciseNoteViewModel
	{
		public int Id { get; set; }

		public string Content { get; set; }

		public string Priority { get; set; }

		public DateTime? Reminder { get; set; }
	}
}