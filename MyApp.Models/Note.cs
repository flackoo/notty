using System;
using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
{
	public class Note
	{
		[Key]
		public int Id { get; set; }

		public string Title { get; set; }

		public string Content { get; set; }

		public virtual User Author { get; set; }

		public DateTime PostedOn { get; set; }

		public DateTime Reminder { get; set; }
	}
}
