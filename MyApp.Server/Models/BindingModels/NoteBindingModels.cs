using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyApp.Server.Models.BindingModels
{
	public class AddNoteBindingModel
	{
		[MinLength(5)]
		[Required]
		public string Content { get; set; }

		public string Reminder { get; set; }

    [Range(0, 5)]
		public int Priority { get; set; }
	}
}