using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyApp.Server.Models.ViewModels
{
	public class HomeBagViewModel
	{
		public IEnumerable<ConciseNoteViewModel> SoonNotes { get; set; }
	}
}